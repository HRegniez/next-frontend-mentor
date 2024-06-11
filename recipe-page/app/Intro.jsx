import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { young_serif } from '@/app/layout'
import { cn } from '@/lib/utils'

function Intro() {
  return (
    <Card className="w-full mt-4">
        <CardHeader>
            <h1 className={cn(young_serif.className, "text-4xl  leading-none")}>Simple Omelette Recipe</h1>
        </CardHeader>
        <CardContent>
            <p className='text-muted tracking-[0.02rem]'>
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
        </CardContent>
        <Card className="m-4 bg-primary-foreground">
            <CardHeader>
                <CardTitle className='text-primary'>Preparation time</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className='list-disc text-primary mx-8'>
                    <li>
                        <p className='text-black ml-4 mb-2'>
                            <strong>Total:</strong> Approximately 10 minutes
                        </p>
                    </li>
                    <li>
                        <p className='text-black ml-4 mb-2'>
                            <strong>Preparation:</strong> 5 minutes
                        </p>
                    </li>
                    <li>
                        <p className='text-black ml-4'>
                            <strong>Cooking:</strong> 5 minutes
                        </p>
                    </li>
                </ul>
            </CardContent>
        </Card>
    </Card>
  )
}

// //   

  

//   Preparation time

//   Total: Approximately 10 minutes
//   Preparation: 5 minutes
//   Cooking: 5 minutes

export default Intro
