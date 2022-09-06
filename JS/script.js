const lis = document.querySelectorAll("li")

       lis.forEach(node => {
        node.addEventListener('mousedown',function(event){
            // event.preventDefault()
            const value = node.innerText.trim()
            const $result = document.querySelector(".result")
            const resulttext = $result.innerText.trim();
            if(resulttext == '0' || resulttext == 'undefined' || resulttext == 'Infinity' || resulttext == 'Expression Error')
            {
                $result.innerText = ''
            }
            if(value == '=') {
                if(resulttext.substring(0,1) == '/' || resulttext.substring(0,1) == '*' || resulttext.substring(0,1) == '+')
                {
                    $result.innerText = 'Expression Error'
                    return true
                }
                let solution = eval(resulttext)
                $result.innerText = solution
                return true
            }
            if(value == 'C') {
                $result.innerText = '0'
                return true;
            }
            $result.append(value);
        })
       });