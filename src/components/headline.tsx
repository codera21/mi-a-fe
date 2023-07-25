import Link from 'next/link';

export function Headline({ title }: { title: string }): JSX.Element {
  return (
    <section>
      <h1 className='title is-size-4 is-uppercase py-2'>{title}</h1>
      <p className='py-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem,
        eveniet iste enim quam nobis voluptatem quas perferendis quisquam nulla
        atque provident odio voluptates minus praesentium obcaecati. Vitae,
        facere corrupti? Pariatur perferendis, aut corporis quaerat magni
        excepturi quod aliquam a saepe beatae eaque eum quis. Distinctio vitae
        iure sed sit veritatis, libero deleniti aspernatur praesentium sapiente,
        vel beatae laudantium harum! Eum mollitia vero natus, excepturi unde
        commodi laborum deleniti omnis! Numquam culpa magnam sit recusandae
        blanditiis adipisci possimus. Nam quam cumque enim saepe sunt
        consequuntur eos itaque aliquam porro expedita! Rem accusamus laboriosam
        tenetur quod, eum fugit alias id quam vitae cum accusantium animi. Nihil
        molestias exercitationem asperiores, error molestiae nam saepe quisquam
        aut? Ipsa libero id doloremque ad dignissimos? Dolore voluptatum
        consectetur minus, voluptatibus libero delectus reprehenderit harum cum
        fugiat, repellendus ducimus quidem veniam illo possimus dolorem
        dignissimos enim veritatis quis. Aperiam temporibus a officiis
        praesentium dignissimos natus neque!
      </p>

      <p className='py-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem,
        eveniet iste enim quam nobis voluptatem quas perferendis quisquam nulla
        atque provident odio voluptates minus praesentium obcaecati. Vitae,
        facere corrupti? Pariatur perferendis, aut corporis quaerat magni
        excepturi quod aliquam a saepe beatae eaque eum quis. Distinctio vitae
        iure sed sit veritatis, libero deleniti aspernatur praesentium sapiente,
        vel beatae laudantium harum! Eum mollitia vero natus, excepturi unde
        commodi laborum deleniti omnis! Numquam culpa magnam sit recusandae
        blanditiis adipisci possimus. Nam quam cumque enim saepe sunt
        consequuntur eos itaque aliquam porro expedita! Rem accusamus laboriosam
        tenetur quod, eum fugit alias id quam vitae cum accusantium animi. Nihil
        molestias exercitationem asperiores, error molestiae nam saepe quisquam
        aut? Ipsa libero id doloremque ad dignissimos? Dolore voluptatum
        consectetur minus, voluptatibus libero delectus reprehenderit harum cum
        fugiat, repellendus ducimus quidem veniam illo possimus dolorem
        dignissimos enim veritatis quis. Aperiam temporibus a officiis
        praesentium dignissimos natus neque!
      </p>

      <p className='py-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem,
        eveniet iste enim quam nobis voluptatem quas perferendis quisquam nulla
        atque provident odio voluptates minus praesentium obcaecati. Vitae,
        facere corrupti? Pariatur perferendis, aut corporis quaerat magni
        excepturi quod aliquam a saepe beatae eaque eum quis. Distinctio vitae
        iure sed sit veritatis, libero deleniti aspernatur praesentium sapiente,
        vel beatae laudantium harum! Eum mollitia vero natus, excepturi unde
        commodi laborum deleniti omnis! Numquam culpa magnam sit recusandae
        blanditiis adipisci possimus. Nam quam cumque enim saepe sunt
        consequuntur eos itaque aliquam porro expedita! Rem accusamus laboriosam
        tenetur quod, eum fugit alias id quam vitae cum accusantium animi. Nihil
        molestias exercitationem asperiores, error molestiae nam saepe quisquam
        aut? Ipsa libero id doloremque ad dignissimos? Dolore voluptatum
        consectetur minus, voluptatibus libero delectus reprehenderit harum cum
        fugiat, repellendus ducimus quidem veniam illo possimus dolorem
        dignissimos enim veritatis quis. Aperiam temporibus a officiis
        praesentium dignissimos natus neque!
      </p>

      <Link href='/users'>Users</Link>
    </section>
  );
}
