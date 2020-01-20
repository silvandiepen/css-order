### Stylelint

To use the order and get checked on it. You can add stylelint to your project. This enforces the order.

```bash
npm install stylelint stylelint-order stylelint-logical-order
```

Add the settings to your package.json

```json
{
    "stylelint": {
        "rules": {
            "at-rule-no-unknown": [
                true,
                {
                    "ignoreAtRules": [
                        "if",
                        "for",
                        "else",
                        "each",
                        "mixin",
                        "extend",
                        "include",
                        "content",
                        "at-root",
                        "function"
                    ]
                }
            ],
            "order/order": [
                "custom-properties",
                "dollar-variables",
                "declarations",
                "rules"
            ]
        },
        "extends": ["stylelint-logical-order"]
    }
}
```

**OR** create a `.stylelintrc.json` file

```json
{
    "plugins": ["stylelint-order"],
    "rules": {
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "if",
                    "for",
                    "else",
                    "each",
                    "mixin",
                    "extend",
                    "include",
                    "content",
                    "at-root",
                    "function"
                ]
            }
        ],
        "order/order": [
            "custom-properties",
            "dollar-variables",
            "declarations",
            "rules"
        ]
    },
    "extends": ["stylelint-logical-order"]
}
```

And add stylelint to your scripts:

```json
{
    "scripts": {
        "stylelint": "stylelint 'src/scss/**/*.scss'",
        "stylelint:fix": "stylelint 'src/scss/**/*.scss' --fix"
    }
}
```

Or when you use it with Vue files;

```json
{
    "scripts": {
        "stylelint": "stylelint '**/*.vue' '**/*.scss'",
        "stylelint:fix": "stylelint '**/*.vue' '**/*.scss' --fix"
    }
}
```
