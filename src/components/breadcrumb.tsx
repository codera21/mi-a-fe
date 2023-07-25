export function BreadCrumb({ path }: { path: Array<string> }): JSX.Element {
  return (
    <section>
      <div className='level py-3'>
        <div className='level-left'>
          <div className='level-item breadcrumb'>
            <ul className='is-size-5'>
              {path?.map((pathItem, index) => (
                <li
                  key={index}
                  className={index === path.length - 1 ? 'is-active' : ''}
                >
                  <a>{pathItem}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
