const topics = [
  {
    id: "0",
    name: "laptops",
    title: "Gaming Laptops",
    image: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI"
  },
  {
    id: "1",
    name: "monitors",
    title: "Monitors",
    image: "https://www.lowyat.net/wp-content/uploads/2021/04/Samsung-Odyssey-G9-2021-refresh-800-450x300.jpg"
  },
  {
    id: "2",
    name: "gameperformancestats",
    title: "Game Performance Stats",
    image: "../static/images/graph.jpeg"
  }
]

const monitors = [
    {
      id: "0",
      title: "Samsung Odyssey G9 2021",
      image: "https://www.lowyat.net/wp-content/uploads/2021/04/Samsung-Odyssey-G9-2021-refresh-800-450x300.jpg",
      text: "Lenovo Legion 1 Pro 12345 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎Intel Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "1",
      title: "XIAOMI 34-inch Computer Gaming Monitor",
      image: "https://www.priceboon.com/wp-content/uploads/2019/10/XIAOMI-34-inch-Computer-Gaming-Monitor.jpg",
      text: "XIAOMI 34-inch Computer Gaming Monitor 3440×1440 High Resolution 1500R Curvature Screen AMD Free-Sync Technology Display." 
    },
    {
      id: "2",
      title: "GIGABYTE G27Q 27\" 144Hz 1440P Gaming Monitor",
      image: "https://c1.neweggimages.com/ProductImageCompressAll1280/24-012-015-01.jpg",
      text: "GIGABYTE G27Q 27\" 144Hz 1440P Gaming Monitor, 2560 x 1440 IPS Display, 1ms (MPRT) Response Time, 92% DCI-P3, VESA Display HDR400, FreeSync Premium, 1x DisplayPort 1.2, 2x HDMI 2.0, 2x USB 3.0, Height Adjustable" 
   },
    {
      id: "3",
      title: "Lenovo Legion 1",
      image: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 1 Pro 12345 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎Intel Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "4",
      title: "Lenovo Legion 3",
      image: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 3 Pro 6789 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎AMD ‎Ryzen 7 Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "5",
      title: "Lenovo Legion 5",
      image: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 5 Pro 82JQ009DIN is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎AMD ‎Ryzen 7 Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
   },
]

const laptops = [
    {
      id: "0",
      title: "Lenovo Legion 1",
      image: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 1 Pro 12345 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎Intel Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "1",
      title: "Lenovo Legion 3",
      image: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 3 Pro 6789 is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎AMD ‎Ryzen 7 Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand." 
    },
    {
      id: "2",
      title: "Lenovo Legion 5",
      image: "https://www.lenovo.com/medias/Legion-5Pro-16-AMD-88GMY501578-725x515.png?context=bWFzdGVyfHJvb3R8NjM3ODR8aW1hZ2UvcG5nfGg0Ny9oMWEvMTE3ODg3NTg3MTIzNTAucG5nfDI5NTYwMTZmNDFlZjEyYmY2YmJlYzJmODZhMTFkN2ZmOGI5NGYzOGI1ODRkYmMzZjg5NjM1YzM2MzllYzhkZWI",
      text: "Lenovo Legion 5 Pro 82JQ009DIN is ‎Windows 10 Home Laptop from ‎Lenovo. This Laptop has Powered by ‎AMD ‎Ryzen 7 Processor. Moreover, This ‎16inch laptop has ‎a 2560x1600 Pixels Screen Resolution. It has 32GB RAM & 1TB SSD as Internal Storage. For All your Graphical functions, It has ‎NVIDIA ‎NVIDIA® GeForce® RTX™ 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W. This Lenovo Legion 5 Pro 82JQ009DIN will give you ‎4.2 Hours of Battery life as claimed by Brand."
   }
]

const laptopDetails = [
  {
    id: "0",
    specs: {
      brand: "‎Lenovo",
      Series: "Legion 5 15",
      model: "‎82B1000AUS",
      operating_system: "‎Windows 10 Home",
      weight: "5.41 pounds",
      screen_size: "15.6 Inches",
      screen_resolution:	"‎1920 x 1080",
      processor: "2.9 GHz ryzen_7_4800h",
      ram: "‎16 GB DDR4",
      memory_speed: "-",
      hard_drive: "‎512 GB Flash Memory Solid State"
    },
    game_performance: [
      {
        id: 0,
        title: "Cyberpunk 2077",
        settings: "High",
        resolution: "1920x1080",
        ray_tracing: "Disabled",
        DLSS: "Disabled",
        DirectX: "12",
        framerate: {
          average: "70.57",
          low: "55.26",
          unit_of_measure: "FPS"
        },
      },
      {
        id: 1,
        title: "Red Dead Redemption 2",
        settings: "High",
        resolution: "1920x1080",
        ray_tracing: "",
        DLSS: "",
        DirectX: "",
        framerate: {
          average: "74.11",
          low: "",
          unit_of_measure: "FPS"
        },
      },
      {
        id: 2,
        title: "Control",
        settings: "High",
        resolution: "1920x1080",
        ray_tracing: "Disabled",
        DLSS: "Disabled",
        DirectX: "12",
        framerate: {
          average: "84.57",
          low: "68.18",
          unit_of_measure: "FPS"
        },
      }
    ]
  },
  {
    id: "1",
    brand: "Dell",
    Series: "Dell G15",
    model: "HU333III0",
    operating_system: "‎Windows 10 Home",
    weight: "6.41 pounds",
    screen_size: "15.6 Inches",
    screen_resolution: "‎1920 x 1080",
    processor: "2.9 GHz Intel Core i7",
    ram: "‎16 GB DDR4",
    memory_speed: "",
    hard_drive: "1 TB Flash Memory Solid State"
  }
]

const productDescription = [
  {
    id: "0",
    details: "Thin and light, the Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean, minimalist design. Featuring AMD Ryzen 7 processors with 8 ultra-responsive cores, NVIDIA GTX 1660Ti graphics, and 16 GB DDR4 supported memory, this uncompromising gaming laptop elevates your favorite AAA titles with breathtakingly immersive experiences via a high refresh screen. The crisp 1080p display delivers outstanding clarity and deep colors, with a 144 Hz refresh rate for full-fidelity gaming."
  }
]

const gamePerformanceStats = [
  {
    id: 0,
    laptopId: 0,

    operating_system: "Windows 10",
    version: "21H1",
    nvidia_drivers: "471.11",
    hybrid_mode: "Off",
    performance_mode: "On",
    ram: "2x 8GB DDR4-3200 CL22"
  }
]

const gameStats = [
  {
    id: "0",
    title: "Cyberpunk 2077"
  }
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

export function getLaptopDetails() {
  return laptopDetails
}

export function getLaptopDetailsById(laptopId) {
  return laptopDetails.find( ({id}) => id === laptopId )
}