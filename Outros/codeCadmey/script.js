const showSecret = domElement =>{
    if(domElement.style.display === 'none')
        	domElement.style.display ==='block';
    else 
        domElement.style.display ==='block';
}

const changeBackground = domElement =>{
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;
    domElement.style.background = `rgb(${r},${g},${b})`;
}

export{changeBackground,showSecret};