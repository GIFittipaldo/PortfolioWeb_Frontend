let asd=document.getElementById("barras")

var chart = new Chart(asd,{
    type:"bar",
    data: {
        labels:["Trabajo en equipo", "Liderazgo", "Adaptabilidad", "Aprendizaje", "Creatividad"],
        datasets:[
            {
                label:'Habilidades blandas (en porcentaje %)',
                data:[85, 75, 70, 80, 60],
                backgroundColor:"rgb(0, 102, 255)",
            }
        ]
    }
})