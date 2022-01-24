const topics = [
  {
    id: "0",
    name: "laptops",
    image: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI"
  },
  {
    id: "1",
    name: "monitors",
    image: "https://www.lowyat.net/wp-content/uploads/2021/04/Samsung-Odyssey-G9-2021-refresh-800-450x300.jpg"
  }
]

const monitors = [
    {
      id: "0",
      title: "Lenovo Legion 1",
      img: "https://www.lowyat.net/wp-content/uploads/2021/04/Samsung-Odyssey-G9-2021-refresh-800-450x300.jpg",
      text: "Lenovo Legion 1 Pro 12345 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎Intel Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "1",
      title: "Lenovo Legion 3",
      img: "https://www.lowyat.net/wp-content/uploads/2021/04/Samsung-Odyssey-G9-2021-refresh-800-450x300.jpg",
      text: "Lenovo Legion 3 Pro 6789 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎AMD ‎Ryzen 7 Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "2",
      title: "Lenovo Legion 5",
      img: "https://www.lowyat.net/wp-content/uploads/2021/04/Samsung-Odyssey-G9-2021-refresh-800-450x300.jpg",
      text: "Lenovo Legion 5 Pro 82JQ009DIN is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎AMD ‎Ryzen 7 Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
   },
]

const laptops = [
    {
      id: "0",
      title: "Lenovo Legion 1",
      img: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 1 Pro 12345 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎Intel Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "1",
      title: "Lenovo Legion 3",
      img: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 3 Pro 6789 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎AMD ‎Ryzen 7 Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "2",
      title: "Lenovo Legion 5",
      img: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 5 Pro 82JQ009DIN is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎AMD ‎Ryzen 7 Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
   },
]

export function getTopics() {
  return topics
}

export function getTopicsByType(type) {
  let topics
  switch (type) {
    case "laptops":
      return getLaptops()

    case "monitors":
      return getMonitors()

      default:
        topics = "laptops"

  }
  return topics
}

export function getTopic(topicId) {
  return topics.find( ({id}) => id === topicId )
}

export function getTopicByName(topicName) {
  return topics.find( ({name}) => name === topicName )
}

export function getMonitor(monitorId) {
  console.log('getMonitor: ' + monitorId);
  return monitors.find( ({id}) => id === monitorId )
}

export function getMonitors() {
  return monitors
}

export function getLaptops() {
  return laptops
}

export function getLaptop(laptopId) {
  return laptops.find( ({id}) => id === laptopId )
}