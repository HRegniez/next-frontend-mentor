import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { young_serif } from '@/app/layout'

function Instructions() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className={cn(young_serif.className, 'text-2xl font-bold text-secondary')}>Instructions</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal text-secondary">
            <li className='mx-4 mb-2'>
                <p className='text-muted ml-4'>
                    <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                </p>
            </li>
            <li className='mx-4 mb-2'>
                <p className='text-muted ml-4'>
                    <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
                </p>
            </li>
            <li className='mx-4 mb-2'>
                <p className='text-muted ml-4'>
                    <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                </p>
            </li>
            <li className='mx-4 mb-2'>
                <p className='text-muted ml-4'>
                    <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                </p>
            </li>
            <li className='mx-4 mb-2'>
                <p className='text-muted ml-4'>
                    <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                </p>
            </li>
            <li className='mx-4 mb-2'>
                <p className='text-muted ml-4'>
                    <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
                </p>
            </li>
        </ol>
      </CardContent>
    </Card>
  )
}

export default Instructions
