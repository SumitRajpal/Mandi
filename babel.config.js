module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
   plugins: [
    [
       'module-resolver',
       {
         root: ['./'],
         extensions: ['.ios.js', '.android.js', '.js','.mjs', '.ts', '.tsx', '.json'],
         alias: {
           "src/": ['./src/*'],
         }
       }
    ],
    "react-native-reanimated/plugin"
  ],

};
