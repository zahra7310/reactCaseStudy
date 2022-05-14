import axios from 'axios';
import { Loading } from '../moduls/loading';
import { UserData } from './user-data';
import './user-tabel.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const UsersTable = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    // console.log('location=', location.state)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(result => {
                setUserList(result.data)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (!loading && location.state) {
            if (location.state.newUser) {
                const newUserList = [...userList]
                newUserList.push(location.state.newUser)
                setUserList(newUserList)
                location.state = null
            } else if (location.state.editUser) {
                const updateUserList = [...userList];
                const findeUser = updateUserList.find(user => user.id === location.state.editUser.id)
                findeUser.name = location.state.editUser.name;
                findeUser.username = location.state.editUser.username;
                findeUser.email = location.state.editUser.email;
                setUserList(updateUserList)
                location.state = null
            }
        }
    }, [loading, location, userList])

    const onDelete = (userId) => {
        
        setLoading(true)
        // console.log(userId)
        axios.delete('https://jsonplaceholder.typicode.com/users/' + userId).then(result => {
            //    console.log(result)
            setUserList(userList.filter(user => user.id !== userId))
            setLoading(false)
        })

    }
    return (
        <div>
            {loading ? <Loading /> : null}
            {userList.length > 0 ? (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end', gap: '15px', marginBottom: '30px' }}>
                        <Link to="new" className='new'>
                            <span className="material-icons">add</span>New
                        </Link>
                    </div>
                    <div className='user-table'>
                        <div className='title-table'>Name</div>
                        <div className='title-table' >User Name</div>
                        <div className='title-table'>Email</div>
                        <div className='title-table'>Action</div>

                        {userList.map((user) => (
                            <UserData
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                                onDelete={onDelete}
                            />
                        ))}

                    </div>
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <p>list is empty</p>
                </div>
            )}
        </div>
    )
}



// export class UsersTable extends Component {
//     constructor() {
//         super();

//         this.state = {
//             userList:
//                 [

//                 ],

//             viweTable: 'list',
//             loading: true
//         }
//         this.linkREF = React.createRef();
//     }

//     componentDidMount() {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(result => {
//                 this.setState({ userList: result.data , loading : false })
//             })
//     }

//     veiwTableHandler = () => {
//         this.setState(...this.state, { viweTable: 'list' })
//     }

//     veiwGridHandler = () => {
//         this.setState(...this.state, { viweTable: 'grid' })
//         // { this.state.viweTable == 'list' ?  ( console.log('list') ) : (console.log('grid')) }
//     }

//     render() {
//         return this.state.loading ? (<Loading />) : (
//             this.state.userList.length > 0 ? (
//                 <div>
//                     <div ref={this.linkREF} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end', gap: '15px', marginBottom: '30px' }}>
//                         <button > list </button>
//                         <button >  grid </button>
//                     </div>
//                     <div className='user-table'>
//                         <div className='title-table'>Name</div>
//                         <div className='title-table' >User Name</div>
//                         <div className='title-table'>Email</div>

//                         {this.state.userList.map((user) => (
//                             <UserData
//                                 key={user.id}
//                                 name={user.name}
//                                 username={user.username}
//                                 email={user.email}
//                             />
//                         ))}

//                     </div>
//                 </div>
//             ) : (
//                 <div style={{ textAlign: 'center', padding: '20px' }}>
//                     <Loading>
//                         <p>list is empty</p>
//                     </Loading>
//                 </div>
//             )
//         )
//     }
// }


