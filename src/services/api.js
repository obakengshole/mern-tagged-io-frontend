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
    title: "Cyberpunk 2077",
    operating_system: "Windows 10",
    version: "21H1",
    nvidia_drivers: "471.11",
    hybrid_mode: "Off",
    performance_mode: "On",
    settings: "High",
    resolution: "1920x1080",
    ray_tracing: "Disabled",
    // ram: "2x 8GB DDR4-3200 CL22",
    DLSS: "Disabled",
    DirectX: "12",
    laptops: [
      {
        id: 0,
        laptopId: 0,
        title: "Lenovo Legion 5",
        framerat: "70.57",
        framerate: {
          average: "70.57",
          one_percent_low: "55.26",
        }
      },
      {
        id: 1,
        laptopId: 0,
        title: "MSI GE76 Raider 11UH",
        cpu: "i9-11980HK",
        gpu: "RTX 3080",
        ram: "16GB",
        framerat: "70.57",
        framerate: {
          average: "97.32",
          one_percent_low: "73.95",
        }
      },
      {
        id: 2,
        laptopId: 0,
        title: "Lenovo Legion 7",
        cpu: "Ryzen 9 5900HX",
        gpu: "RTX 3080",
        ram: "16GB",
        framerate: {
          average: "93.86",
          one_percent_low: "68.63",
        }
      },
      {
        id: 3,
        laptopId: 0,
        title: "Lenovo Legion 5 Pro",
        cpu: "Ryzen 7 5800H",
        gpu: "RTX 3070",
        ram: "16GB",
        framerat: "70.57",
        framerate: {
          average: "83.95",
          one_percent_low: "58.68",
        }
      },
      {
        id: 4,
        laptopId: 0,
        title: "ASUS Strix G15 Advantage",
        cpu: "Ryzen 9 5900HX",
        gpu: "AMD 6800M",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "79.49",
          one_percent_low: "52.95",
        }
      },
      {
        id: 5,
        laptopId: 0,
        title: "ASUS Zephyrus M16",
        cpu: "Intel i9-11900H",
        gpu: "RTX 3070",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "74.69",
          one_percent_low: "53.93",
        }
      },
      {
        id: 6,
        laptopId: 0,
        title: "Alienware m15 R5",
        cpu: "Ryzen 9 5900HX",
        gpu: "RTX 3070",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "74.55",
          one_percent_low: "52.68",
        }
      },
      {
        id: 7,
        laptopId: 0,
        title: "HP Omen 15z-en100",
        cpu: "Ryzen 7 5900H",
        gpu: "RTX 3070",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "71.50",
          one_percent_low: "55.78",
        }
      },
      {
        id: 8,
        laptopId: 0,
        title: "Lenovo Legion 5",
        cpu: "Ryzen 7 5900H",
        gpu: "RTX 3060",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "68.12",
          one_percent_low: "49.72",
        }
      },
      {
        id: 9,
        laptopId: 0,
        title: "Acer Nitro 5",
        cpu: "Ryzen 5 5600H",
        gpu: "RTX 3060",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "60.88",
          one_percent_low: "50.59",
        }
      },
      {
        id: 10,
        laptopId: 0,
        title: "MSI GS76 Stealth 11UE",
        cpu: "Intel i7-11800H",
        gpu: "RTX 3060",
        ram: "",
        framerate: {
          average: "58.85",
          one_percent_low: "47.86",
        }
      },
      {
        id: 11,
        laptopId: 0,
        title: "Acer Nitro 5",
        cpu: "Intel i5-11400H",
        gpu: "RTX 3060",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "58.73",
          one_percent_low: "49.04",
        }
      },
      {
        id: 12,
        laptopId: 0,
        title: "ASUS Zephyrus G14 GA401QM",
        cpu: "Ryzen 9 5900HS",
        gpu: "RTX 3060",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "58.31",
          one_percent_low: "44.38",
        }
      },
      {
        id: 13,
        laptopId: 0,
        title: "Acer Nitro 5",
        cpu: "Intel i5-11400H",
        gpu: "RTX 3060",
        ram: "Stock RAM (1x 8GB x16)",
        framerat: "70.57",
        framerate: {
          average: "47.48",
          one_percent_low: "28.21",
        }
      },
      {
        id: 14,
        laptopId: 0,
        title: "Lenovo Legion 5",
        cpu: "Ryzen 7 4800H",
        gpu: "GTX 1660 Ti",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "45.70",
          one_percent_low: "38.70",
        }
      },
      {
        id: 15,
        laptopId: 0,
        title: "Dell G5 15 SE 5505",
        cpu: "Ryzen 5 4600H",
        gpu: "AMD 5600M",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "42.59",
          one_percent_low: "35.21",
        }
      },
      {
        id: 16,
        laptopId: 0,
        title: "XMG Core 17 Tongfang GM7TGER",
        cpu: "Intel i7-11800H",
        gpu: "RTX 3050 Ti",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "38.52",
          one_percent_low: "30.00",
        }
      },
      {
        id: 17,
        laptopId: 0,
        title: "XMG Core 17 Tongfang GM7TGER",
        cpu: "Intel i7-11800H",
        gpu: "RTX 3050",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "38.52",
          one_percent_low: "30.00",
        }
      },
      {
        id: 18,
        laptopId: 0,
        title: "Lenovo Y530 (i5-8300H/GTX 1060)",
        cpu: "Intel i5-8300H",
        gpu: "GTX 1060",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "7.75",
          one_percent_low: "22.05",
        }
      },
      {
        id: 19,
        laptopId: 0,
        title: "Acer Nitro 5",
        cpu: "Ryzen 5 4600H",
        gpu: "GTX 1650",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "25.66",
          one_percent_low: "20.68",
        }
      },
      {
        id: 20,
        laptopId: 0,
        title: "Lenovo L340",
        cpu: "Intel i5-9300H",
        gpu: "GTX 1650",
        ram: "",
        framerat: "70.57",
        framerate: {
          average: "23.51",
          one_percent_low: "16.75",
        }
      },
    ]
  },

  {
    id: 1,
    title: "Red Dead Redemption",
    operating_system: "Windows 10",
    version: "21H1",
    nvidia_drivers: "471.11",
    hybrid_mode: "Off",
    performance_mode: "On",
    settings: "High",
    resolution: "1920x1080",
    ray_tracing: "Disabled",
    // ram: "2x 8GB DDR4-3200 CL22",
    DLSS: "Disabled",
    DirectX: "12",
    laptops: [
      {
        id: 0,
        laptopId: 0,
        title: "Lenovo Legion 7",
        framerate: {
          average: "90.57",
          one_percent_low: "55.26",
        }
      },
      {
        id: 1,
        laptopId: 0,
        title: "ASUS Zephyrus G14 GA401QM",
        cpu: "i9-11980HK",
        gpu: "RTX 3080",
        ram: "16GB",
        framerat: "70.57",
        framerate: {
          average: "99.32",
          one_percent_low: "73.95",
        }
      },
      {
        id: 2,
        laptopId: 0,
        title: "Acer Predator",
        cpu: "Ryzen 9 5900HX",
        gpu: "RTX 3080",
        ram: "16GB",
        framerate: {
          average: "83.86",
          one_percent_low: "68.63",
        }
      }
    ]
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

export function getGamePerformanceStats() {
  return gamePerformanceStats
}