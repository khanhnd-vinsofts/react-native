import * as Types from './../constants/ActionTypes'


export const atcSaveProduct = (product) => {
    return {
        type: Types.SAVE_PRODUCT,
        product
    }
}