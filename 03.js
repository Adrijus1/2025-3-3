const myElement = document.createElement('div');
myElement.textContent = 'NEBEPRISIKISKEKOPUSTELIAUJANTIEMS';
document.body.appendChild(myElement);

const anotherElement = document.createElement('p');
anotherElement.textContent = 'paragrafas';
myElement.appendChild(anotherElement);


        const paragrafas = document.getElementById("pirmasparagrapahas");
        paragrafas.className = "myClass";
        paragrafas.id = "myId";

        const nuoroda = document.createElement("a");
        nuoroda.href = "https://www.google.com";
        nuoroda.textContent = "Google";
        paragrafas.appendChild(nuoroda);

        const paveiksliukas = document.createElement("img");
        paveiksliukas.src = "image.jpg";
        paveiksliukas.alt = "Paveiksliukas";
        paragrafas.appendChild(paveiksliukas);

        const pTags = [];
        for (let i = 0; i < 5; i++) {
            const p = document.createElement('p');
            p.textContent = `Paragrafas ${i + 1}`;
            myElement.appendChild(p);
            pTags.push(p);
        }
        
        pTags.forEach((p, index) => {
            if (index % 2 === 0) {
                p.style.color = 'red';
                p.style.backgroundColor = 'black';
            } else {
                p.style.color = 'white';
                p.style.backgroundColor = 'green';
            }
        });
        
        const inputElement = document.createElement('input');
                inputElement.type = 'text';
                document.body.appendChild(inputElement);
        
                const buttonElement = document.createElement('button');
                buttonElement.textContent = 'Paimti reikšmę';
                document.body.appendChild(buttonElement);
        
                const outputElement = document.createElement('div');
                document.body.appendChild(outputElement);
        
                buttonElement.addEventListener('click', () => {
                    const inputValue = inputElement.value;
                    console.log(inputValue);
                    outputElement.textContent = inputValue;
                });
        
                
                        const createButton = document.createElement('button');
                        createButton.textContent = 'Sukurti elementą';
                        createButton.style.backgroundColor = 'lightgreen';
                        createButton.style.padding = '10px';
                        createButton.style.margin = '5px';
                        document.body.appendChild(createButton);
                
                        const removeButton = document.createElement('button');
                        removeButton.textContent = 'Pašalinti elementą';
                        removeButton.style.backgroundColor = 'lightcoral';
                        removeButton.style.padding = '10px';
                        removeButton.style.margin = '5px';
                        document.body.appendChild(removeButton);
                
                        let newElement = null;
                
                        createButton.addEventListener('click', () => {
                            newElement = document.createElement('div');
                            newElement.textContent = 'Naujas elementas';
                            newElement.style.padding = '20px';
                            newElement.style.backgroundColor = 'lightblue';
                            document.body.appendChild(newElement);
                        });
                
                        removeButton.addEventListener('click', () => {
                            if (newElement) {
                                document.body.removeChild(newElement);
                                newElement = null;
                            }
                        });
                
                        