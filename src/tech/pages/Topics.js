import React, { useState } from 'react'
import { getMonitors, getTopicsByType } from '../../services/api'
import TopicCard from '../components/TopicCard'

// https://s.neofiliac.com/P/69/19/1610570242_t.jpg

const Topics = (props) => {
  console.log("props.topic", props.topic);
  const { topic } = props
  
  const monitors = getMonitors()
  console.log("Topic to search by ", topic);
  const topics = getTopicsByType(topic)
  // const topics = getTopicByName(topic)
  const [itemSelected, setItemSelected] = useState(-1)

  // useEffect(() => {
    // setItemSelected()
  // }, [])

  return (
    <div>
    {
      topics.map(topic => {
        return(
            <p>
            <TopicCard key={topic.id} title={topic.name} image={topic.image} detailsPage={topic.detailsPage}/>
            </p>
          )
        })
      }
      </div>
  )

}

export default Topics