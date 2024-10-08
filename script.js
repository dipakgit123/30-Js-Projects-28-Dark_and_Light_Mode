

function LightMode(){
    document.body.style.backgroundColor = "white";
    document.getElementById('toggle').textContent ='Dark mode is Off'
    document.getElementById('toggle').style.color="Black"
    document.getElementById('btn1').style.backgroundColor="white"
    document.getElementById('btn2').style.backgroundColor="white"
    document.getElementById('btn2').style.color="black"

}

function DarkMode(){
    document.body.style.backgroundColor="Black"
    document.getElementById('toggle').textContent ='Dark mode is On'
    document.getElementById('toggle').style.color="white"
    document.getElementById('btn2').style.backgroundColor="black"
    document.getElementById('btn2').style.color="white"
}