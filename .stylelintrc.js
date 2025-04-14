module.exports = {
  extends: [
    "stylelint-config-standard-scss"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {

    "selector-class-pattern": "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
    "max-nesting-depth": [3, { 
      "ignoreAtRules": ["media", "include", "container", "supports", "layer"]
    }],
    
    "selector-max-id": 0,
    "selector-max-compound-selectors": 4, 
    "selector-no-qualifying-type": [true, {
      "ignore": ["attribute", "class"]
    }],
    "selector-max-universal": 1,
    
    "property-no-unknown": [true, {
      "ignoreProperties": ["box-orient"]
    }],
    "scss/operator-no-unspaced": null,
    "color-function-notation": "legacy",
    "alpha-value-notation": "number",
    "hue-degree-notation": null,
    "media-feature-range-notation": null,
    "number-max-precision": 8,
    
    "declaration-empty-line-before": null,
    "comment-empty-line-before": null,
    "comment-whitespace-inside": null,
    
   
    "scss/dollar-variable-pattern": null, // Deshabilitar temporalmente
    "scss/no-global-function-names": null,
    
    "no-duplicate-selectors": null, 
    "no-descending-specificity": null
  },
  ignoreFiles: [
    "dist/**/*",
    "node_modules/**/*",
    ".parcel-cache/**/*",
    "**/*.js",
    "**/*.html",
    "src/assets/styles/vendor/**/*",
    "src/assets/styles/_bootstrap-custom.scss" 
  ]
};