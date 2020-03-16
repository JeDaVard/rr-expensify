import moment from "moment";

export default [
    {
        description: 'teXt dEscription',
        amount: 12,
        createdAt: 0,
        note: 'test Note 1',
        id: '1',
    },
    {
        description: 'teXtify value',
        amount: 60,
        createdAt: moment(12001)
            .subtract(4, 'days')
            .valueOf(),
        note: 'test Note 2',
        id: '2',
    },
    {
        description: 'teSt description',
        amount: 21,
        createdAt: moment(1001)
            .add(4, 'days')
            .valueOf(),
        note: 'test Note 3',
        id: '3',
    },
];