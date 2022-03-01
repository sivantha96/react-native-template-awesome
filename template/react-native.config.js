module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            // to avoid adding all the fonts to the bundle, when updating pods
            platforms: {
                ios: null,
            },
        },
    },
};
