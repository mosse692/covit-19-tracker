import { useEffect } from "react";

async function getInfo(e) {
  e.preventDefault();
  var form = new FormData(document.getElementById("form"));
  var inputValue = form.get("search");
  const table1 = document.getElementsByTagName("table")[0];

  if (table1) {
    table1.remove();
  }

  const body = document.getElementsByClassName("App")[0];
  const div = document.createElement("div");
  div.classList.add("container");
  const table = document.createElement("table");

  table.classList.add("table");
  table.classList.add("table-dark");
  table.classList.add("table-striped");
  table.classList.add("table-hover");
  const tableHead = document.createElement("thead");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  const tbody = document.createElement("tbody");
  const tr1 = document.createElement("tr");
  const tr2 = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  table.append(tableHead);
  tr1.append(th1);
  tr1.append(th2);
  tr1.append(th3);
  tr1.append(th4);
  tableHead.append(tr1);
  tr2.append(td1);
  tr2.append(td2);
  tr2.append(td3);
  tr2.append(td4);
  tbody.append(tr2);
  table.append(tbody);
  div.append(table);
  body.append(div);

  if (inputValue === "us") {
    inputValue = inputValue.toUpperCase();

    await fetch(
      `https://covid-api.mmediagroup.fr/v1/cases?country=${inputValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        th1.innerHTML = "Country";
        th2.innerHTML = "Confirmed Cases";
        th3.innerHTML = "Recovered";
        th4.innerHTML = "Deaths";
        td1.innerHTML = `${data.All.country}`;
        td2.innerHTML = `${data.All.confirmed}`;
        td3.innerHTML = `${data.All.recovered}`;
        td4.innerHTML = `${data.All.deaths}`;
      });
  } else {
    inputValue =
      inputValue.charAt(0).toUpperCase() +
      inputValue.slice(1).toLocaleLowerCase();

    await fetch(
      `https://covid-api.mmediagroup.fr/v1/cases?country=${inputValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        th1.innerHTML = "Country";
        th2.innerHTML = "Confirmed Cases";
        th3.innerHTML = "Recovered";
        th4.innerHTML = "Deaths";
        td1.innerHTML = `${data.All.country}`;
        td2.innerHTML = `${data.All.confirmed}`;
        td3.innerHTML = `${data.All.recovered}`;
        td4.innerHTML = `${data.All.deaths}`;
      });
  }
}



function Form() {
  
          const body = document.getElementById("root")
          const div = document.createElement("div");
          const tableHead = document.createElement("thead");
          div.classList.add("container");
      
          const table = document.createElement("table");
          table.classList.add("table");
          table.classList.add("table-dark");
          table.classList.add("table-striped");
          table.classList.add("table-hover");
          const th1 = document.createElement("th");
          const th2 = document.createElement("th");
          const th3 = document.createElement("th");
          const th4 = document.createElement("th");
          th1.innerHTML = "Country";
          th2.innerHTML = "Confirmed Cases";
          th3.innerHTML = "Recovered";
          th4.innerHTML = "Deaths";
          const tr1 = document.createElement("tr");
          tr1.appendChild(th1);
          tr1.appendChild(th2);
          tr1.appendChild(th3);
          tr1.appendChild(th4);
          tableHead.appendChild(tr1);
          table.append(tableHead);

  useEffect(() => {
    async function search() {
      await fetch("https://covid-api.mmediagroup.fr/v1/cases")
        .then((response) => response.json())
        .then((data1) => {

          for (const [val1, val2] of Object.entries(data1)) {
            const tbody = document.createElement("tbody");

            const tr2 = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");

            td1.innerHTML = val1;
            td2.innerHTML = val2.All.confirmed;
            td3.innerHTML = val2.All.recovered;
            td4.innerHTML = val2.All.deaths;
            tr2.append(td1);
            tr2.append(td2);
            tr2.append(td3);
            tr2.append(td4);
            tbody.append(tr2);
            table.append(tbody);
            div.append(table);
            body.append(div);
          }

        });

        const div1 = document.createElement("div");
        div1.classList.add("container-fluid");
        div1.classList.add("bg-dark");
        div1.classList.add("text-light");
        div1.classList.add("form1");
        const footer = document.createElement('footer')
        footer.classList.add('py-5')

        const form = document.createElement('form')
        const p = document.createElement('p')
        p.innerHTML = 'Monthly digest of whats new and exciting from us'
        const divf = document.createElement('div')
        divf.classList.add('d-flex')
        divf.classList.add('w-100')
        divf.classList.add('gap-2')
        const label = document.createElement('label')
        label.setAttribute('htmlFor', 'newsletter') 
        label.classList.add('visually-hidden')
        label.innerHTML = 'Email address'
        const input = document.createElement('input')
        input.setAttribute('id', 'newsletter')
        input.setAttribute('type', 'text')
        input.setAttribute('placeholder', 'Email address')
        input.classList.add('form-control')
        const button = document.createElement('button')
        button.classList.add('btn')
        button.classList.add('btn-primary')
        button.setAttribute('type', 'button')
        button.innerHTML = 'Subscribe'

        divf.append(label)
        divf.append(input)
        divf.append(button)

        form.append(p)
        form.append(divf)


        const row = document.createElement('div')
        row.classList.add('row')
        row.classList.add('d-flex')
        row.classList.add('justify-content-evenly')

        const col1 = document.createElement('div')
        col1.classList.add('col-2')

        const col2 = document.createElement('div')
        col2.classList.add('col-2')

        const col3 = document.createElement('div')
        col3.classList.add('col-2')

        const col4 = document.createElement('div')
        col4.classList.add('col-4')
        col4.classList.add('offset-1')

        const h5 = document.createElement('h5')
        h5.innerHTML = 'Section'

        const h51 = document.createElement('h5')
        h51.innerHTML = 'Section'

        const h52 = document.createElement('h5')
        h52.innerHTML = 'Section'

        const h53 = document.createElement('h5')
        h53.innerHTML = 'Subscribe to our news letter'


        const ul1 = document.createElement('ul')
        ul1.classList.add('nav')
        ul1.classList.add('flex-column')

        const ul2 = document.createElement('ul')
        ul2.classList.add('nav')
        ul2.classList.add('flex-column')

        const ul3 = document.createElement('ul')
        ul3.classList.add('nav')
        ul3.classList.add('flex-column')

        ///////////////////////////////////////////
        const li1 = document.createElement('li')
        li1.classList.add('nav-item')
        li1.classList.add('mb-2')
        li1.innerHTML = 'Home'

        const li2 = document.createElement('li')
        li2.classList.add('nav-item')
        li2.classList.add('mb-2')
        li2.innerHTML = 'Features'

        const li3 = document.createElement('li')
        li3.classList.add('nav-item')
        li3.classList.add('mb-2')
        li3.innerHTML = 'Pricing'

        const li4 = document.createElement('li')
        li4.classList.add('nav-item')
        li4.classList.add('mb-2')
        li4.innerHTML = 'FAQs'

        const li5 = document.createElement('li')
        li5.classList.add('nav-item')
        li5.classList.add('mb-2')
        li5.innerHTML = 'About'

        //////////////////////////////////////////////
        const li6 = document.createElement('li')
        li6.classList.add('nav-item')
        li6.classList.add('mb-2')
        li6.innerHTML = 'Home'

        const li7 = document.createElement('li')
        li7.classList.add('nav-item')
        li7.classList.add('mb-2')
        li7.innerHTML = 'Features'

        const li8 = document.createElement('li')
        li8.classList.add('nav-item')
        li8.classList.add('mb-2')
        li8.innerHTML = 'Pricing'

        const li9 = document.createElement('li')
        li9.classList.add('nav-item')
        li9.classList.add('mb-2')
        li9.innerHTML = 'FAQs'

        const li10 = document.createElement('li')
        li10.classList.add('nav-item')
        li10.classList.add('mb-2')
        li10.innerHTML = 'About'

        //////////////////////////////////////////////
        const li11 = document.createElement('li')
        li11.classList.add('nav-item')
        li11.classList.add('mb-2')
        li11.innerHTML = 'Home'

        const li12 = document.createElement('li')
        li12.classList.add('nav-item')
        li12.classList.add('mb-2')
        li12.innerHTML = 'Features'

        const li13 = document.createElement('li')
        li13.classList.add('nav-item')
        li13.classList.add('mb-2')
        li13.innerHTML = 'Pricing'

        const li14 = document.createElement('li')
        li14.classList.add('nav-item')
        li14.classList.add('mb-2')
        li14.innerHTML = 'FAQs'

        const li15 = document.createElement('li')
        li15.classList.add('nav-item')
        li15.classList.add('mb-2')
        li15.innerHTML = 'About'

        ul1.append(li1)
        ul1.append(li2)
        ul1.append(li3)
        ul1.append(li4)
        ul1.append(li5)

        //////////////////////
        ul2.append(li6)
        ul2.append(li7)
        ul2.append(li8)
        ul2.append(li9)
        ul2.append(li10)

        //////////////////////
        ul3.append(li11)
        ul3.append(li12)
        ul3.append(li13)
        ul3.append(li14)
        ul3.append(li15)

        col1.appendChild(h5)
        col1.appendChild(ul1)

        col2.appendChild(h51)
        col2.appendChild(ul2)

        col3.appendChild(h52)
        col3.appendChild(ul3)

        col4.appendChild(h53)
        col4.appendChild(form)

        row.appendChild(col1)
        row.appendChild(col2)
        row.appendChild(col3)
        row.appendChild(col4)

        footer.append(row)
        div1.append(footer)

        body.append(div1)

    }

    search()
  });

  return (
    <div>
      <div className="container mt-3 mb-3">
        <form className="d-flex" id="form">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Insert the name of the country"
            name="search"
          />
          <button
            className="btn btn-outline-dark"
            type="submit"
            onClick={getInfo}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
