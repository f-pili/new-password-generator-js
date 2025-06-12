document.addEventListener("DOMContentLoaded", () => {
    const characters = [
      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
      "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
      "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
      "0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^",
      "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
      ".","?","/"
    ];
  
    const firstOutputEl  = document.querySelector("#firstOutput");
    const secondOutputEl = document.querySelector("#secondOutput");
    const btn            = document.querySelector(".btn-generate");
    const outputs        = [firstOutputEl, secondOutputEl];
  
    btn.addEventListener("click", generatePassword);
  
    function generatePassword() {
      let pwd1 = "";
      let pwd2 = "";
  
      for (let i = 0; i < 15; i++) {
        pwd1 += characters[Math.floor(Math.random() * characters.length)];
        pwd2 += characters[Math.floor(Math.random() * characters.length)];
      }
  
      firstOutputEl.textContent  = pwd1;
      secondOutputEl.textContent = pwd2;
    }
  
    outputs.forEach(el => {
      el.addEventListener("click", () => {
        const text = el.textContent;
        if (!text) return;
  
        copyText(text)
          .then(() => {
            el.classList.add("copied");
            setTimeout(() => el.classList.remove("copied"), 1000);
          })
          .catch(err => {
            console.error("Copiatura fallita:", err);
            alert("Impossibile copiare automaticamente; seleziona e copia manualmente.");
          });
      });
    });
  
    function copyText(str) {
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(str);
      }
      
      return new Promise((resolve, reject) => {
        const ta = document.createElement("textarea");
        ta.value = str;

        ta.style.position = "fixed";
        ta.style.top      = "-9999px";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try {
          document.execCommand("copy");
          resolve();
        } catch (e) {
          reject(e);
        } finally {
          document.body.removeChild(ta);
        }
      });
    }
  });
  