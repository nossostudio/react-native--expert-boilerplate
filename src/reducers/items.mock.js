const maxProductionTimeMock = 8*4000 //s
const minProductionTimeMock = 8*3000 //s
const maxRestingTimeMock = 2*3600 //s
const minRestingTimeMock = 3000 // s
const itemsMock = [
  {
    month: new Date(2019, 11),
    items: [
      {
        day: new Date(2019, 11, 1),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 11, 2),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 11, 3),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 11, 4),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 11, 5),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 11, 6),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 11, 7),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 11, 8),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 11, 9),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 11, 10),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 11, 11),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 11, 12),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      }
    ]
  },
  {
    month: new Date(2019, 10),
    items: [
      {
        day: new Date(2019, 10, 4),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 10, 5),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 10, 6),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 10, 7),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 10, 8),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 10, 9),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 10, 10),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 10, 11),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 10, 12),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 10, 13),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      },
      {
        day: new Date(2019, 10, 14),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 10, 15),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 10, 16),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      },
      {
        day: new Date(2019, 10, 17),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      }
    ]
  }
]

export default itemsMock;