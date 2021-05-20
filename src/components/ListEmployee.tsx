import { 
    CardWrapper,
    Text,
    Medium,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardButton,
} from './index'
import { format } from 'date-fns'
import { useActions } from '../state/hooks/useActions'

interface IEmployee  {
    name: string,
    gender: string,
    salary: number,
    date_birth: string,
    _id: string
}

export const ListEmployee: React.FC<IEmployee> = ({ name, salary, gender, date_birth, _id}) => {
    const { deleteEmployee } = useActions()
    return (
        <CardWrapper>
        <CardHeader>
          <CardHeading>{name}</CardHeading>
        </CardHeader>

        <CardBody>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Text style={{ marginRight:10}}>Birthdate</Text><Medium>{format(new Date(date_birth), "MMMM do, yyyy")}</Medium>
          </div>

          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Text style={{ marginRight:10}}>Gender</Text><Medium>{gender}</Medium>
          </div>

          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Text style={{ marginRight:10}}>Salary</Text><Medium>{salary}</Medium>
          </div>

          <CardFieldset>
            <CardButton type="button" onClick={() => deleteEmployee(_id)}>Delete</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    )
}