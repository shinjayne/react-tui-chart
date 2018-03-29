# React Toast UI Chart Component

## install
```angular2html
yarn add react-tui-chart
```

### usage
```angular2html
import Toast from 'react-tui-chart';
import React from 'react';

const ChartPage = (props)=>{
    return (
        <Toast
            id={"first"}
            data=props.data 
            options=props.options 
            chartType={"barChart"} 
        />
    )
}

```
