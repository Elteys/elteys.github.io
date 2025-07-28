function TextBox() {
  return (
    <section className="text_box">
      <article>
        <h2>About Apples</h2>
        <p>
          Honestly, I had no idea what to call my website, so I just picked the very first thing that popped into my head: apples. They are tasty, healthy, and incredibly versatile.
        </p>
      </article>
      <article>
        <h2>Health Benefits</h2>
        <ul>
          <li>
            <strong>Rich in vitamins and minerals: </strong>
            Apples contain vitamin C, potassium, and several B vitamins.
          </li><br></br>
          <li>
            <strong>Antioxidant powerhouse: </strong>
            Apples are high in antioxidants, which can help protect your body from damage by free radicals.
          </li><br></br>
          <li>
            <strong>Supports heart health: </strong>
            Research suggests that apples can lower cholesterol and may help reduce the risk of heart disease.
          </li>
        </ul>
      </article>
      <article>
        <h2>Security Headers</h2>
        <p>
          Learn more: <a target="_blank" href="https://securityheaders.com/" rel="noopener noreferrer">Scan your site at securityheaders.com</a>
        </p>
      </article>
    </section>
  );
}

export default TextBox;
