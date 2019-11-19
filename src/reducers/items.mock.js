const nanoid = require('nanoid/non-secure');
const maxProductionTimeMock = 8 * 4000 //s
const minProductionTimeMock = 8 * 3000 //s
const maxRestingTimeMock = 2 * 3600 //s
const minRestingTimeMock = 3000 // s
const itemsMock = [
  {
    id: nanoid(),
    month: new Date(2019, 10),
    items: [
      {
        day: new Date(2019, 10, 1),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock)) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock)) + minProductionTimeMock
      },
      // {
      //   day: new Date(2019, 10, 2),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 10, 3),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 10, 4),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 10, 5),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 10, 6),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 10, 7),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 10, 8),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 10, 9),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 10, 10),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 10, 11),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 10, 12),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // }
    ]
  },
  {
    id: nanoid(),
    month: new Date(2019, 9),
    items: [
      {
        day: new Date(2019, 9, 4),
        restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock)) + minRestingTimeMock,
        productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock)) + minProductionTimeMock
      },
      // {
      //   day: new Date(2019, 9, 5),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 9, 6),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 9, 7),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 9, 8),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 9, 9),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 9, 10),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 9, 11),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 9, 12),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 9, 13),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
      // },
      // {
      //   day: new Date(2019, 9, 14),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 9, 15),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 9, 16),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // },
      // {
      //   day: new Date(2019, 9, 17),
      //   restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
      //   productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
      // }
    ]
  }
]

export default itemsMock;