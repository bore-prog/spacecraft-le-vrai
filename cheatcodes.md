# CHEATCODES pour coder [Like a Boss](https://www.youtube.com/watch?v=NisCkxU544c)

## tsrnfs + tab

```tsx
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const test = (props: Props) => {
  return (
    <View>
      <Text>test</Text>
    </View>
  )
}

export default test

const styles = StyleSheet.create({})
```

## tsrnfe + tab

ça  marche pas celui-là mais **rnfe** si :
```tsx
import { View, Text } from 'react-native'
import React from 'react'

const test = () => {
  return (
    <View>
      <Text>test</Text>
    </View>
  )
}

export default test
```

## tsrnf + tab

```tsx
import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const test = (props: Props) => {
  return (
    <View>
      <Text>test</Text>
    </View>
  )
}

export default test
```

Lien utile : [Snippets de react native](https://davidl.fr/pattern)

On peut définir un composant en créant une fonction qui renvoit un élément React

Une fonction nommée :
```js
function ArticleTitle() {
  return <Text>React Native Design Patterns</Text>;
}
```
Ou une fonction fléchée:
```js
const ArticleTitle = () => {
  return <Text>React Native Design Patterns</Text>;
}
```

## Javascript Snippets

[Lien vers des maxi-raccourcis clavier en javascript](https://github.com/nathanchapman/vscode-javascript-snippets)

exemples : `map+tab`/`if+tab`/`dco+tab`/`filter+tab`
```js
.map((item) => {
    
})

if (condition) {
    
}

const {name} = value

.filter(item => {
    
})

```
[Autre lien de raccourcis](https://github.com/ults-io/vscode-react-javascript-snippets/blob/master/docs/Snippets.md)


## Turbo Console Log

Pour console log rapidement grâce à [Turbo console log](https://github.com/Chakroun-Anas/turbo-console-log) : le raccourci clavier c'est `ctrl` + `alt` + `L` (pour Windows) (ou `ctrl` + `option` + `L` : Mac)


Expo Tools : `ctrl` + `espace` dans app.json (j'ai pas encore bien compris le principe mais ça a l'air de fonctionner) voir [la doc](https://docs.expo.dev/)


