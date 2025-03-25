// if/else

// ?:
// &&  - УМОВНИЙ РЕНДЕРІНГ. рендерить праву частину тільки якщо ліва частина true. Якщо isLoading дорівнює  null, undefined, false то JSX відобразить нічого. Ніколи не використовуй && з такими значеннями напряму: 0, '', NaN
// || - ЗНАЧЕННЯ ПО ЗАМОВЧЕННЮ. falsie
// ?? - ЗНАЧЕННЯ ПО ЗАМОВЧЕННЮ. undefined/null

function ConditionalRendering() {
  const isLoggedIn = true;
  // const name = "Vitaliy";
  // const name = "";
  // const name = 0;
  // const name = NaN;
  // const name = null;
  // const name = undefined;
  // const count = 0;
  // const count = 1;

  // const testValues = {
  //   trueValue: true,
  //   falseValue: false,
  //   nullValue: null,
  //   undefinedValue: undefined,
  //   zero: 0,
  //   emptyString: "",
  //   nonEmptyString: "Hello",
  //   number: 42,
  //   array: [],
  //   object: { name: "React" },
  // };

  if (isLoggedIn) {
    return <div>Welcome {name ? <span>{name}</span> : <span>User</span>}</div>;
  } else {
    return <div>Welcome Guest</div>;
  }

  // return <div>Welcome {count ? <span>{name}</span> : null}</div>;
  // return <div>Welcome {count && <span>{name}</span>}</div>;
  // return <div>Welcome {count > 0 && <span>{name}</span>}</div>
  // return <div>Welcome {name || "Anna"}</div>;
  // return <div>Welcome {name ?? "Anna"}</div>;

  // Приклади для &&

  // return (
  //   <div style={{ fontFamily: "sans-serif" }}>
  //     <h2>React && Rendering Demo</h2>

  //     <p>✅ Truthy values (буде рендеритись):</p>
  //     {testValues.trueValue && <div>✔️ true → показано</div>}
  //     {testValues.nonEmptyString && <div>✔️ 'Hello' → показано</div>}
  //     {testValues.number && <div>✔️ 42 → показано</div>}
  //     {testValues.array && <div>✔️ [] → показано</div>}
  //     {testValues.object && <div>✔️ {"{}"} → показано</div>}

  //     <hr />

  //     <p>⚠️ Falsy values:</p>
  //     {testValues.falseValue && <div>❌ false → не показано</div>}
  //     {testValues.nullValue && <div>❌ null → не показано</div>}
  //     {testValues.undefinedValue && <div>❌ undefined → не показано</div>}
  //     {testValues.emptyString && <div>❌ '' → не показано</div>}

  //     <p>{testValues.zero && <div>❌ 0 → не показано</div>}</p>
  //     <p>
  //       А ось просто `0 && ...` результат:
  //       <b>{testValues.zero && "Це видно?"}</b>
  //     </p>
  //   </div>
  // );
}

export default ConditionalRendering;
