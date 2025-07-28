function TextBox() {
  return (
    <section className="text_box">
      <article>
        <h2>About Apples</h2>
        <p>
          Apples are among the most popular fruits in the world—they are tasty, healthy, and incredibly versatile.
          Discover my favorite varieties and find out why you should consider eating them!
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
