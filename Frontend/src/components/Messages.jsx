import React, {useState, useEffect } from 'react'
import Message from './Message'
import { db } from '../firebase'
import { setEmails } from '../redux/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'


function Messages() {
  const dispatch = useDispatch();
  const emails = useSelector(store => store.appSlice.emails);
  const searchText = useSelector(store => store.appSlice.searchText);
  const [tempEmails, setTempEmails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allEmails));
    });
    //cleanup
    return () => {
      unsubscribe();
    }
  },[]);

  useEffect(() => {
    const filteredEmails = emails?.filter((email) => {
      return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to.toLowerCase().includes(searchText.toLowerCase()) || email?.message.toLowerCase().includes(searchText.toLowerCase());
    });
    setTempEmails(filteredEmails);
},[searchText, emails]);
  return (
    <div>
        {
          tempEmails && tempEmails.map((email) => (
            <Message email={email} />
          ))
        }
    </div>
  )
}

export default Messages