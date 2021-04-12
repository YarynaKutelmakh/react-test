const darkStyle = `
body {
    background-color: rgb(32, 35, 41);
}
.card {
    background-color: rgb(60, 62, 68);
    color: #fff;
    box-shadow: none;
}
.active-nav {
    color:#fff;
}
.btnLight,
.btnDark {
    background-color: inherit;
    color: #ccc;
    border: 1px solid #ccc;
}
.pageNumbers li:hover {
    color: #fff;
    border: 1px solid #fff;
    transform: scale(1.06);
}
.btnLight:hover,
.btnDark:hover {
    color: #000;
    border: 1px solid #000;
    background-color: #fff;
}
.filterBtn{
    color: #ccc;
}
`
export default darkStyle