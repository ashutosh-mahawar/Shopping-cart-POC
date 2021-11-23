import Card from '../UI/Card';
import MaterialItem from './MaterialItem/MaterialItem';
import classes from './AvailableMaterials.module.css';

const DUMMY_MATERIALS = [
  {
    id: 'm1',
    name: 'Maggie',
    description: 'Finest noodles',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Tomato KetchUp',
    description: 'An additive flavoring for snacks!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue sauce',
    description: 'American, raw',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMaterials = () => {
  const materialsList = DUMMY_MATERIALS.map((material) => (
    <MaterialItem
      key={material.id}
      id={material.id}
      name={material.name}
      description={material.description}
      price={material.price}
    />
  ));

  return (
    <section className={classes.materials}>
      <Card>
        <ul>{materialsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMaterials;