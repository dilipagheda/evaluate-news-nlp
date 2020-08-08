import { handleSubmit } from "../formHandler";
import { enableFetchMocks } from "jest-fetch-mock";

beforeEach(() => {
  enableFetchMocks();
  fetch.resetMocks();
});

const mockResponse = {
  status: {
    code: "0",
    msg: "OK",
    credits: "1",
    remaining_credits: "19981",
  },
  model: "general_en",
  score_tag: "P",
  agreement: "AGREEMENT",
  subjectivity: "OBJECTIVE",
  confidence: "100",
  irony: "NONIRONIC",
  sentence_list: [
    {
      text:
        'After the publication of our visual investigation on the Sydney "mega-blaze", readers asked us how we found the tree which started the Gospers Mountain bushfire',
      inip: "0",
      endp: "159",
      bop: "y",
      confidence: "100",
      score_tag: "P",
      agreement: "AGREEMENT",
      segment_list: [
        {
          text:
            'After the publication of our visual investigation on the Sydney "mega-blaze", readers asked us how we found the tree which started the Gospers Mountain bushfire',
          segment_type: "main",
          inip: "0",
          endp: "159",
          confidence: "100",
          score_tag: "P",
          agreement: "AGREEMENT",
          polarity_term_list: [
            {
              text: "start@V",
              inip: "123",
              endp: "129",
              confidence: "100",
              score_tag: "P",
              sentimented_concept_list: [
                {
                  form: "publication",
                  id: "403d3926ea",
                  variant: "publication",
                  inip: "10",
                  endp: "20",
                  type: "Top",
                  score_tag: "P",
                },
                {
                  form: "reader",
                  id: "030772557f",
                  variant: "readers",
                  inip: "78",
                  endp: "84",
                  type: "Top>Person",
                  score_tag: "P",
                },
                {
                  form: "tree",
                  id: "35f20d6542",
                  variant: "tree",
                  inip: "112",
                  endp: "115",
                  type: "Top>LivingThing>Flora",
                  score_tag: "P",
                },
              ],
            },
          ],
          sentimented_entity_list: [
            {
              form: "Sydney",
              id: "2a3fcc69a2",
              variant: "Sydney",
              inip: "57",
              endp: "62",
              type: "Top>Location>GeoPoliticalEntity>City",
              score_tag: "NONE",
            },
            {
              form: "Gospers Mountain",
              id: "__8908057099639966169",
              variant: "Gospers Mountain",
              inip: "135",
              endp: "150",
              type: "Top",
              score_tag: "NONE",
            },
          ],
          sentimented_concept_list: [
            {
              form: "investigation",
              id: "6e4db500b6",
              variant: "investigation",
              inip: "36",
              endp: "48",
              type: "Top",
              score_tag: "NONE",
            },
          ],
          segment_list: [
            {
              text: "which started the Gospers Mountain bushfire",
              segment_type: "main",
              inip: "117",
              endp: "159",
              confidence: "100",
              score_tag: "P",
              agreement: "AGREEMENT",
              polarity_term_list: [
                {
                  text: "start@V",
                  inip: "123",
                  endp: "129",
                  confidence: "100",
                  score_tag: "P",
                },
              ],
              sentimented_entity_list: [
                {
                  form: "Gospers Mountain",
                  id: "__8908057099639966169",
                  variant: "Gospers Mountain",
                  inip: "135",
                  endp: "150",
                  type: "Top",
                  score_tag: "NONE",
                },
              ],
            },
          ],
        },
      ],
      sentimented_entity_list: [
        {
          form: "Sydney",
          id: "2a3fcc69a2",
          type: "Top>Location>GeoPoliticalEntity>City",
          score_tag: "NONE",
        },
        {
          form: "Gospers Mountain",
          id: "__8908057099639966169",
          type: "Top",
          score_tag: "NONE",
        },
      ],
      sentimented_concept_list: [
        {
          form: "reader",
          id: "030772557f",
          type: "Top>Person",
          score_tag: "P",
        },
        {
          form: "tree",
          id: "35f20d6542",
          type: "Top>LivingThing>Flora",
          score_tag: "P",
        },
        {
          form: "publication",
          id: "403d3926ea",
          type: "Top",
          score_tag: "P",
        },
        {
          form: "investigation",
          id: "6e4db500b6",
          type: "Top",
          score_tag: "NONE",
        },
      ],
    },
    {
      text: "— a journalist explains how he did it.",
      inip: "161",
      endp: "198",
      bop: "n",
      confidence: "100",
      score_tag: "NONE",
      agreement: "AGREEMENT",
      segment_list: [
        {
          text: "— a journalist explains how he did it",
          segment_type: "secondary",
          inip: "161",
          endp: "197",
          confidence: "100",
          score_tag: "NONE",
          agreement: "AGREEMENT",
          polarity_term_list: [],
          sentimented_concept_list: [
            {
              form: "journalist",
              id: "0d2a86e544",
              variant: "journalist",
              inip: "165",
              endp: "174",
              type: "Top>OtherEntity>Vocation",
              score_tag: "NONE",
            },
          ],
        },
      ],
      sentimented_entity_list: [],
      sentimented_concept_list: [
        {
          form: "journalist",
          id: "0d2a86e544",
          type: "Top>OtherEntity>Vocation",
          score_tag: "NONE",
        },
      ],
    },
  ],
  sentimented_entity_list: [
    {
      form: "Sydney",
      id: "2a3fcc69a2",
      type: "Top>Location>GeoPoliticalEntity>City",
      score_tag: "NONE",
    },
    {
      form: "Gospers Mountain",
      id: "__8908057099639966169",
      type: "Top",
      score_tag: "NONE",
    },
  ],
  sentimented_concept_list: [
    {
      form: "reader",
      id: "030772557f",
      type: "Top>Person",
      score_tag: "P",
    },
    {
      form: "journalist",
      id: "0d2a86e544",
      type: "Top>OtherEntity>Vocation",
      score_tag: "NONE",
    },
    {
      form: "tree",
      id: "35f20d6542",
      type: "Top>LivingThing>Flora",
      score_tag: "P",
    },
    {
      form: "publication",
      id: "403d3926ea",
      type: "Top",
      score_tag: "P",
    },
    {
      form: "investigation",
      id: "6e4db500b6",
      type: "Top",
      score_tag: "NONE",
    },
  ],
};

test("verify handleSubmit function populates the sentiment results correctly", () => {
  const event = { preventDefault: () => {} };

  jest.spyOn(event, "preventDefault");

  fetch.mockResponse(() => {
    return new Promise((resolve) => {
      resolve(JSON.stringify(mockResponse));
    });
  });

  document.body.innerHTML = `
        <textarea id="name" name="input" rows="10"></textarea>
        <div id="error-message"></div>
        <section>
            <div id="user-input-section"></div>
        </section>

        <section>
            <div id="results"></div>
        </section>       
    `;

  document.getElementById("name").value = "hi there";

  return handleSubmit(event).then(() => {
    //verify that preventDefault is called
    expect(event.preventDefault).toBeCalled();

    //Verify that portion of response data is in DOM
    expect(document.body).toMatchSnapshot();
  });
});

test("verify handleSubmit function displays the message please wait.. while waiting for the result from api", () => {
  const event = { preventDefault: () => {} };

  jest.spyOn(event, "preventDefault");

  fetch.mockResponse(() => {
    //Verify that portion of response data is in DOM
    expect(document.body).toMatchSnapshot();
    return new Promise((resolve) => {
      resolve(JSON.stringify(mockResponse));
    });
  });

  document.body.innerHTML = `
        <textarea id="name" name="input" rows="10"></textarea>
        <div id="error-message"></div>
        <section>
            <div id="user-input-section"></div>
        </section>

        <section>
            <div id="results"></div>
        </section>       
    `;

  document.getElementById("name").value = "hi there";

  return handleSubmit(event).then(() => {
    //verify that preventDefault is called
    expect(event.preventDefault).toBeCalled();
  });
});

test("verify handleSubmit function displays the error for invalid input text and fetch call is not made", () => {
  const event = { preventDefault: () => {} };

  jest.spyOn(event, "preventDefault");
  jest.spyOn(global, "fetch");

  document.body.innerHTML = `
      <textarea id="name" name="input" rows="10"></textarea>
      <div id="error-message"></div>
      <section>
          <div id="user-input-section"></div>
      </section>

      <section>
          <div id="results"></div>
      </section>       
  `;

  document.getElementById("name").value = ""; //pass empty value

  handleSubmit(event);
  expect(event.preventDefault).toBeCalled();
  expect(global.fetch).not.toBeCalled();

  expect(document.body).toMatchSnapshot();
});
