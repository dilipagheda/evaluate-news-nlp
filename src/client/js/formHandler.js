import { validateInput } from "./validateInput";
import { baseUrl } from "../constants/index";

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (!validateInput(formText)) {
    document.getElementById(
      "error-message"
    ).innerHTML = `Input text should not be empty or more than 5000 characters!`;
    return;
  }

  document.getElementById("error-message").innerHTML = "";
  document.getElementById("results").innerHTML = `<span>Please wait...</span>`;

  return fetch(`${baseUrl}/sentiment?text=${formText}`)
    .then((res) => res.json())
    .then(function (res) {
      updateUI(res, formText);
    })
    .catch((error) => {
      document.getElementById("results").innerHTML = error;
    });
}

function renderList(list) {
  const htmlListItems = [];

  if (list) {
    if (list.length > 0) {
      list.forEach((item) => {
        const htmlItem = `
                    <tr>
                        <td>${item.form}</td>
                        <td>${item.type}</td>
                        <td>${item.score_tag}</td>
                    </tr>
                `;
        htmlListItems.push(htmlItem);
      });
    }
  }

  if (htmlListItems.length > 0) {
    return `<table class='data-table'>
        <tr>
            <th>Form</th>
            <th>Type</th>
            <th>Score tag</th>
        </tr>
        ${htmlListItems.join(" ")}
    </table>`;
  } else {
    return "<span>No items found</span>";
  }
}

function updateUI(data, formText) {
  const sentimentedEntityList = `
    <div class='result-section'>
        <h2>Sentimented entity list</h2>
        ${renderList(data.sentimented_entity_list)}
    </div>
    `;

  const sentimentedConceptList = `
    <div class='result-section'>
        <h2>Sentimented concept list</h2>
        ${renderList(data.sentimented_concept_list)}
    </div>
    `;

  const htmlTable = `
    <div class="result-section">
        <h2>Overall results</h2>
        <table class='data-table'>
            <tr>
                <th>Score tag</th>
                <th>Agreement</th>
                <th>Confidence</th>
            </tr>
            <tr>
                <td>${data.score_tag}</td>
                <td>${data.agreement}</td>
                <td>${data.confidence}</td>
            </tr>
        </table>
    </div>
    `;

  const htmlOutput = `
        ${htmlTable}
        ${sentimentedEntityList}
        ${sentimentedConceptList}
    `;

  const htmlInput = `
        <h2>You entered</h2>
        <div class='user-input'>
            ${formText}
        </div>
        
    `;
  document.getElementById("user-input-section").innerHTML = htmlInput;
  document.getElementById("results").innerHTML = htmlOutput;
}

export { handleSubmit };
