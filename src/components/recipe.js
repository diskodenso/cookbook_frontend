import React from "react";
import { useState, useEffect } from "react";
import { client } from "../client";
// import RouterConfig from "./components/RouterConfig";

const Recipe = () => {
  return(
      <div>
          <h2 className="text-info">Barbeque Chicken</h2>
          <div className="big-flex">
            <div className="flex-bbq">
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                </svg>&nbsp;
                Cook Time : 35 mins<br />
                </p>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>&nbsp;
                Serves : 4 people<br />
                </p>
                <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                </svg>&nbsp;
                Calories : 251 Kcal
                </p><br />
                <p>The best BBQ chicken recipe doesn't call for complicated marinades or rubs, it's all about this easy on-the-grill or in-the-oven cooking method sweetened with BBQ sauce for moist and juicy chicken breasts every time.</p>
                <br />
                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-info share" id="liveAlertBtn">Share</button>
            </div>
            <div className="hcontainer">
                {image}
                <div className="middle">
                    <div classNmae="htext">Barbeque Chicken</div>
                </div>
            </div>
        </div>
        <br />
        <h4>Ingredients</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
                4 boneless skinless chicken breasts</li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
                extra virgin olive oil</li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
                kosher salt , to taste</li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
                freshly ground black pepper , to taste</li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
                1/2 cup of your favorite BBQ sauce</li>
        </ul>
        <br />
        <h4>Method</h4>
        <p>Prepare the grill for direct cooking at high heat (450°F). Brush the cooking grates clean.</p>

        <p>Drizzle the chicken breasts with extra virgin olive oil and rub over the breasts. Season generously with kosher salt and freshly ground black pepper.</p>

        <p>Place the chicken breasts on the hot grill. Cover and cook for 5-6 minutes or until they easily release from the grates.
            Flip the chicken and cook for 4-5 minutes longer. Baste the chicken breasts with BBQ sauce, flip and cook for 2 minutes on each side. Repeat on the other side. Cook until the breasts are firm to the touch and opaque all the way through, registering 160°F internal temp (the temp will rise to 165°F as the chicken rests).</p>
    
        <p>Transfer to a plate and cover with a piece of aluminum foil and let rest for 5 minutes. Serve with more BBQ sauce if desired.</p>
    </div>
      </div>
  )
}
  export default App;