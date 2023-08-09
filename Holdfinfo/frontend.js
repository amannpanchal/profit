var apiUrl = 'https://api.wazirx.com/api/v2/tickers'
var data = []
apiUrl = 'https://cors.iamnd.eu.org/?url=' + apiUrl;


const func = async () => {
    try {
        await axios.get(apiUrl)
            .then((response) => {


                axios.post('http://localhost:4000/getdata', {
                    data: Object.entries(response.data).slice(0, 10)
                }).then((res) => {
                    console.log('res ', res);


                }).catch((e) => {
                    console.log('the error is', error)
                })

            })
            .catch((error) => {
                console.error('Axios Error:', error);
            });


    }
    catch (e) {
        console.log('the error in try and catch block ', e);
    }
}
// func();
const func2 = async () => {
    try {
        await axios.get('http://localhost:4000/alldata').then((e) => {
            data = [...e.data]

            var ab = document.getElementById('bottom2')
            var select1 = document.getElementById('select1')
            var at  = document.getElementById('at');
            // console.log(select1.value)
            console.log(ab);
            ab.innerHTML =''
           Array.from( e?.data).map((e, key) => {
                       console.log(select1.value)
        const selectt = document.createElement('option');
        console.log(e.details.at)
        if(select1.value === e.name) {

            at.innerHTML = e.details.at
        }
        
        selectt.innerHTML = e.name;
        // console.log(selectt,select1)
    select1.appendChild(selectt);
                
                const divv = document.createElement('div');
                divv.classList = 'platform2'
                const p1 = document.createElement('p')
                const p2 = document.createElement('p')
                const p3 = document.createElement('p')
                const p4 = document.createElement('p')
                const p5 = document.createElement('p')
                const p6 = document.createElement('p')
                p1.innerHTML = key + 1
                p2.innerHTML = e.name;
                p3.innerHTML = e.details.last;
                p4.innerHTML = parseInt((e.details.buy) ).toFixed(1) + " / " +parseInt(e.details.sell).toFixed(1)
                var x = (e.details.low - e.details.high).toFixed(2)
                p5.innerHTML = x;
                if(x>0) {
                    p5.classList = 'green'
                }
                else {
                    p5.classList = 'red'
                }
                var y = (((e.details.low - e.details.high) * 100) / e.details.high).toFixed(2)
                
                if(y<0) {
                   var a = document.createElement('i')
                //    a.classList = 'fas-solid fa-caret-down'
                  
                   p6.appendChild(a);
                   var b = document.createElement('span')
                    b.innerHTML = y + "%"
                    b.classList = 'red'
                    p6.appendChild(b);
                    // <i class="fa-solid fa-caret-down"></i>
                }
                else {
                    var a = document.createElement('i')
                //    a.classList = 'fas-solid fa-caret-up'
                   p6.appendChild(a);
                   var b = document.createElement('span')
                    b.innerHTML = y + "%"
                    b.classList = 'green'
                    p6.appendChild(b);
                }
                divv.appendChild(p1)
                divv.appendChild(p2)
                divv.appendChild(p3)
                divv.appendChild(p4)
                divv.appendChild(p5)
                divv.appendChild(p6)
                ab.appendChild(divv)
                
            }
            )
    
    
  
}).catch((e) => {
                console.log("the error in api is ", e);
            })
    } catch (e) {

    }
}
func2()
const slider = document.getElementById('round-slider');

slider.addEventListener('input', () => {
    const n  = document.documentElement;
  const value = slider.value;
  const thumb = slider.querySelector('.slider::-webkit-slider-thumb');

  const rotation = (value - slider.min) * 180 / (slider.max - slider.min);
  thumb.style.transform = `rotate(${rotation}deg)`;
  if(value>90) {
    n.style.setProperty('--back' , 'white')
n.style.setProperty('--color4' , ' #888686')

  }
else if(value <50) {
    n.style.setProperty('--back' , '#191d28')
    n.style.setProperty('--color4' , '#f8f9fa')

}



});

// --color1 :	#17a2b8;
//     --white: #ffffff;
//     --color3 : #da5757;
//     --color4 : #888686;
//     --back : #191d28;
//     --color5 : #2d2c2c;
// const n  = document.documentElement;
// n.style.setProperty('--back' , 'white')
// n.style.setProperty('--color4' , '#f8f9fa')
