# fraction-grid
A more semantic, back-end developer friendly grid leading with the idea that layout and style should read separately.

###Install using npm
```sh
npm install fraction-grid
```

###The basic elements
```sh
<box>                           // Container
    <row>                       // Wrapper
        <unit>Unit 1</unit>     // Content
    </row>
</box>
```


###The basic grid
```sh
<box>
    <row>
        <unit take="3/5">Unit 1</unit>
        <unit take="1/5">Unit 2</unit>
        <unit take="1/5">Unit 3</unit>
    </row>
</box>
```
###Make it responsive
```sh
<box>
    <row>
        <unit take="3/5" sm-take="1/1" md-take="1/3">Unit 1</unit>
        <unit take="1/5" sm-take="1/1" md-take="1/3">Unit 2</unit>
        <unit take="1/5" sm-take="1/1" md-take="1/3">Unit 3</unit>
    </row>
</box>
```

###Add some spacing
```sh
<box>
    <row push-all="20">
        <unit>Unit 1</unit>
        <unit>Unit 2</unit>
        <unit>Unit 3</unit>
    </row>
</box>
<box>
    <row push-top="20">
        <unit>Unit 1</unit>
        <unit>Unit 2</unit>
        <unit>Unit 3</unit>
    </row>
</box>
<box>
    <row push-bottom="20">
        <unit>Unit 1</unit>
        <unit>Unit 2</unit>
        <unit>Unit 3</unit>
    </row>
</box>
<box>
    <row push-left="20">
        <unit>Unit 1</unit>
        <unit>Unit 2</unit>
        <unit>Unit 3</unit>
    </row>
</box>
<box>
    <row push-right="20">
        <unit>Unit 1</unit>
        <unit>Unit 2</unit>
        <unit>Unit 3</unit>
    </row>
</box>
```
###Use it as a tag or an attribute
```sh
<!-- Tag -->
<box>
    <row>
        <unit>Unit 1</unit>
        <unit>Unit 2</unit>
        <unit>Unit 3</unit>
    </row>
</box>

<!-- Attribute -->
<div box>
    <div row>
        <div unit>Unit 1</div>
        <div unit>Unit 2</div>
        <div unit>Unit 3</div>
    </div>
</div>
```

###Control the total width of the container and center it
```sh
<!-- Tag -->
<box>
    <row lg-max-stretch="3/4">
        <unit>Unit 1</unit>
        <unit>Unit 2</unit>
        <unit>Unit 3</unit>
    </row>
</box>

```

