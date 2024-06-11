import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { young_serif } from '@/app/layout'
import { cn } from '@/lib/utils'

function Ingredients() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn(young_serif.className, 'text-2xl leading-none tracking-wide text-secondary')}>Ingredients</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc text-secondary">
            <li className="mx-4 mb-2 ">
              <p className='text-muted ml-4'>
                2-3 large eggs
              </p>
            </li>
            <li className="mx-4 mb-2">
              <p className='text-muted ml-4'>
                Salt, to taste
              </p>
            </li>
            <li className="mx-4 mb-2">
              <p className='text-muted ml-4'>
                Pepper, to taste
              </p>
            </li>
            <li className="mx-4 mb-2">
              <p className='text-muted ml-4'>
                1 tablespoon of butter or oil
              </p>
            </li>
            <li className="mx-4 mb-2">
              <p className='text-muted ml-4'>
                1 tablespoon of butter or oil
              </p>
            </li>
            <li className="mx-4 mb-2">
              <p className='text-muted ml-4'>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default Ingredients

