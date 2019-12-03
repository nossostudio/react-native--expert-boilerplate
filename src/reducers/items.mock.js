const nanoid = require('nanoid/non-secure')
const itemsMock = [
  {
    id: nanoid(),
    month: new Date(2019, 10), // monthIndex
    items: [
      {
        day: new Date(2019, 10, 26),
        restingTime: 3500,
        productionTime: 3900 * 8
      },
      {
        day: new Date(2019, 10, 25),
        restingTime: 3600,
        productionTime: 3600 * 8
      },
      {
        day: new Date(2019, 10, 24),
        restingTime: 3400,
        productionTime: 3600 * 8
      },
      {
        day: new Date(2019, 10, 23),
        restingTime: 3600,
        productionTime: 3500 * 8
      },
      {
        day: new Date(2019, 10, 22),
        restingTime: 3800,
        productionTime: 3700 * 8
      },
      {
        day: new Date(2019, 10, 21),
        restingTime: 3900,
        productionTime: 3800 * 8
      },
      {
        day: new Date(2019, 10, 20),
        restingTime: 3400,
        productionTime: 3600 * 8
      },
      {
        day: new Date(2019, 10, 19),
        restingTime: 3600,
        productionTime: 3500 * 8
      },
      {
        day: new Date(2019, 10, 18),
        restingTime: 3800,
        productionTime: 3700 * 8
      },
      {
        day: new Date(2019, 10, 17),
        restingTime: 3900,
        productionTime: 3800 * 8
      }
    ]
  }
  // {
  //   id: nanoid(),
  //   month: new Date(2019, 9),
  //   items: [
  //     {
  //       day: new Date(2019, 9, 4),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock)) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock)) + minProductionTimeMock
  //     },
  //     {
  //       day: new Date(2019, 9, 5),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
  //     },
  //     {
  //       day: new Date(2019, 9, 6),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
  //     },
  //     {
  //       day: new Date(2019, 9, 7),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
  //     },
  //     {
  //       day: new Date(2019, 9, 8),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
  //     },
  //     {
  //       day: new Date(2019, 9, 9),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
  //     },
  //     {
  //       day: new Date(2019, 9, 10),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
  //     },
  //     {
  //       day: new Date(2019, 9, 11),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
  //     },
  //     {
  //       day: new Date(2019, 9, 12),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
  //     },
  //     {
  //       day: new Date(2019, 9, 13),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock
  //     },
  //     {
  //       day: new Date(2019, 9, 14),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
  //     },
  //     {
  //       day: new Date(2019, 9, 15),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
  //     },
  //     {
  //       day: new Date(2019, 9, 16),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
  //     },
  //     {
  //       day: new Date(2019, 9, 17),
  //       restingTime: Math.floor(Math.random() * (maxRestingTimeMock - minRestingTimeMock) ) + minRestingTimeMock,
  //       productionTime: Math.floor(Math.random() * (maxProductionTimeMock - minProductionTimeMock) ) + minProductionTimeMock,
  //     }
  //   ]
  // }
]

export default itemsMock
