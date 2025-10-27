import { useEffect } from "react";

export default function WelcomeModal() {
/* - função que permite executar código automaticamente quando o componente é mostrado no ecrã
   - assim que o componente WelcomeModal aparece, o código dentro do useEffect é executado.
 */  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }
  }, []);
  
  return (
    <>
{/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex justify-center"></div>
          <picture className="flex justify-center">
            <source
              srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.gif"
              alt="👻"
              width="64"
              height="64"
            />
          </picture>

          <div className="py-4 flex flex-col gap-6 text-center justify-center">
            Chegas-te a um sítio muito perigoso, tens a certeza que queres
            continuar? Clica em Continuar ou ESC, os dois levam-te por caminhos
            longínquos... !
            <p>Se tens o SOM muito ALTO ... CUIDAAADO!</p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Continuar</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
