import React from 'react';
import { ScrollMenu, VisibilityContext, Arrow } from 'react-horizontal-scrolling-menu';
import '../components/myswipercopy.css'

const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});

// const Arrow = ({ text, className }) => {
  // return (
    // <div
    //   className={className}
    // >{text}</div>
    // <div>

      // <i class="arrow left"></i>
    // </div>
  // );
// };

// const ArrowLeft = Arrow({ text: '<', className: 'scroll-menu-arrow' });
// const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

    function HorizontalScroll() {
      const [items, setItems] = React.useState(getItems);
      const [selected, setSelected] = React.useState([]);
      const [position, setPosition] = React.useState(0);
      
      const isItemSelected = (id) => !!selected.find((el) => el === id);
      
      
      const handleClick =
      (id) =>
      ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(id);
        
        setSelected((currentSelected) =>
        itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
        );
      };
      
      const menu = Menu(list, 1);

  return (
    // <ScrollMenu arrowLeft={LeftArrow} arrowRight={RightArrow}
    //  >
    //   {
    //     list.map((item) => {
    //       return (
    //         <MenuItem text={item.name} className='menu-item'/>
    //       )
    //     })
    //   }
    // </ScrollMenu>

    <ScrollMenu arrowLeft={LeftArrow} arrowRight={RightArrow}>
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}




function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow className='arrow-prev' disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow className='scroll-menu-arrow' disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

export default HorizontalScroll;