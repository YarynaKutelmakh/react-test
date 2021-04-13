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
.pageNumbers li:active {
    transform: scale(0.9);
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
.text {
    color: #ccc;
}
.btnNewPost {
    color: #fff;
}
.inputGender {
    color: #fff;
}
.personalName,
.personalText,
.name,
.episode {
    color: #ccc;
}
`
export default darkStyle