export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (newFeature) => {

    return {

        type: ADD_FEATURE,
        payload: newFeature

    }

};

export const REMOVE_ADD_FEATURE = "REMOVE_ADD_FEATURE";
export const removeAddFeature = (featureId) => {

    return {

        type: REMOVE_ADD_FEATURE,
        payload: featureId

    }

};