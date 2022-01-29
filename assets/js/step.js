let myStepper = document.querySelector('#my-steps');
let formulario = document.querySelector('[data-form]');
const btn = document.querySelectorAll(".btn");
const btnA = Array.from(btn);
const conteudo = document.querySelectorAll('[data-conteudo]');
const conteudoA = Array.from(conteudo);
const remover = () =>{
    conteudoA.map((x) => {
        x.classList.remove('ativo')
    })
}

myStepper.init({
    steps: [
        { name: 'Step 1'}, 
        { name: 'Step 2'}, 
        { name: 'Step 3', disabled: true}, 
        { name: 'Step 4', disabled: true},
        { name: 'Step 5', disabled: true}, 
        { name: 'Step 6', disabled: true}
    ],
    style: {
            progressFillColor: '#0099ff',
        }
    });

    btnA[0].addEventListener('click', () => {
        switch (myStepper.getStep().number) {
            case 1:
                window.location.href = "http://localhost/RemessaJa%20ANTIGO/public/";
                break;
            case 2:
                myStepper.setStep(1);
                remover();
                conteudoA[0].classList.add('ativo');
                myStepper.disableStep(3);
                break;
            case 3:
                myStepper.setStep(2);
                remover();
                conteudoA[1].classList.add('ativo');
                myStepper.enableStep(3);
                myStepper.disableStep(4);
                break;
            case 4:
                myStepper.setStep(3);
                remover();
                conteudoA[2].classList.add('ativo');
                myStepper.enableStep(4);
                myStepper.disableStep(5);
                break;
            case 5:
                myStepper.setStep(4);
                remover();
                conteudoA[3].classList.add('ativo');
                myStepper.enableStep(5);
                myStepper.disableStep(6);
                break;
            case 6:
                conteudoA[4].classList.add('ativo');
                myStepper.setStep(5);
        }
    })

    btnA[1].addEventListener('click', () => {
        switch (myStepper.getStep().number) {
            case 1:
                myStepper.setStep(2);
                remover();
                conteudoA[1].classList.add('ativo');
                myStepper.enableStep(3);
                break;
            case 2:
                myStepper.setStep(3);
                remover();
                conteudoA[2].classList.add('ativo');
                myStepper.enableStep(4);
                break;
            case 3:
                myStepper.setStep(4);
                remover();
                conteudoA[3].classList.add('ativo');
                myStepper.enableStep(5);
                break;
            case 4:
                myStepper.setStep(5);
                remover();
                conteudoA[4].classList.add('ativo');
                myStepper.enableStep(6);
                break;
            case 5:
                myStepper.setStep(6);
                remover();
                conteudoA[5].classList.add('ativo');
                break;
            case 6:
                alert("Finish");
                window.location.href = "http://localhost/RemessaJa%20ANTIGO/public/";
                break;
        }
    })

if (myStepper.getStep().number === 3){
    alert('foi');
}