
import './css.css'
function FORM() {

    return (
        <>
            <div className="container">
                

                <div className="formfield" id="lastnamefield">
                    <input type="text" name="Title" id="lastname" required />
                    <label alt="Nom" for="lastname" placeholder="Title">Title</label>
                </div>

                <div className="formfield" id="addressfield">
                    <input type="text" name="Description" id="address" required />
                    <label alt="Adresse" for="address" placeholder="Description">Description</label>
                </div>
                <br /> <br />
                <div className="formfield" id="zipcodefield">
                    <input type='text' name="Lein" id="zipcode" required />
                    <label alt="Lein" for="zipcode" placeholder="Lein">Lein</label>
                </div>
                <div className="formfield" id="cityfield">
                    <input type='file' name="Védio" id="city" required />
                    <label alt="Védio" for="Védio" >Védio</label>
                    <input type='submit' id='submit' />
                </div>

            </div>
        </>

    );

}
export default FORM;
