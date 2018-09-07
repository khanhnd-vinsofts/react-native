import * as Types from './../constants/ActionTypes';

var initialState = {
    pts : [
       {
        id : 1,
        name : 'Honda Wave Alpha',
        producer: 'Honda'
       },
       {
        id : 2,
        name : 'Honda Art blade',
        producer: 'Honda'
       },
       {
        id : 3,
        name : 'Honda SH',
        producer: 'Honda'
       },
       {
        id : 4,
        name : 'Honda Dreamer',
        producer: 'Honda'
       },
       {
        id : 5,
        name : 'Piaggio Medley ABS 150cc',
        producer: 'Piaggio'
       },
       {
        id : 6,
        name : 'Piaggio Liberty ABS 125cc',
        producer: 'Piaggio'
       },
       {
        id : 7,
        name : 'Piaggio Liberty ABS 150cc',
        producer: 'Piaggio'
       },
       {
        id : 8,
        name : 'Piaggio Zip',
        producer: 'Piaggio'
       },
       {
        id : 9,
        name : 'Yamaha MT-03',
        producer: 'Yamaha'
       },
       {
        id : 10,
        name : 'Yamaha TFX',
        producer: 'Yamaha'
       },
       {
        id : 11,
        name : 'Yamaha NM-X',
        producer: 'Yamaha'
       },
       {
        id : 12,
        name : 'Yamaha EXciter 150cc',
        producer: 'Yamaha'
       },

    ]
}

const products = (state = initialState, action) => {
    switch(action.type) {
        
        default : return state;
    }
}

export default products;