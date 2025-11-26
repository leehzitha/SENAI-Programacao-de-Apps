import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList} from "react-native";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app, db } from '../firebaseConfig.js'
import { useEffect, useState  } from "react";
import { router } from "expo-router";
import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, updateDoc } from "firebase/firestore";


const auth = getAuth(app);

export default function SongList() {
  const [songs, setSongs] = useState<any[]>([]);
  const [ loading, setLoading ] = useState(true);

  async function fetchSongs() {
    try {
      const q = query(collection(db, 'songs'));
      const snapshot = await getDocs(q);

      console.log(snapshot.docs)

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSongs(list);
    }
    catch (err){
      console.log('Search Error: ', err);
    }
    finally {
      setLoading(false);
    }

  }

  async function UpdateSong(id: string, data: any){
    try {
      const ref = doc(db, 'songs', id);
      await updateDoc(ref, data);

      alert("Song Updated!");
      fetchSongs();
    }
    catch (err){
      console.log("Update error: ", err);
    }
  }

  async function deleteSong(id: string){
    try {
      const ref = doc(db, 'songs', id);
      await deleteDoc(ref);

      alert("Song Deleted!");
      fetchSongs();
    }

    catch (err){
      console.log("Delete error: ", err);
    }
  }

  useEffect(() => {
    fetchSongs();
  }, []);
  
  if (loading) {
    return (
      <View style={{ padding: 20}}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (songs.length === 0) {
    return (
      <Text>Nenhuma musga foi encontrada!</Text>
    );
  }

  function renderStars(rate: number) {
    return (
      <View style={{ display: 'flex', flexDirection: 'row'}}>
        {[...Array(rate)].map((_,i) => (
          <Text key={i} style={{ fontSize: 20 }}>☆</Text>
        ))}
      </View>
    )
  }
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 15}}>
        Songs
      </Text>

    <FlatList
      data={songs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ backgroundColor: "#fff", padding: 16, borderRadius: 12, marginBottom: 15, elevation: 3}}>
          <Text style={{ fontSize: 18, fontWeight: '600'}}>{item.name}</Text>
          <Text style={{ fontSize: 15, fontWeight: '600', color: 'gray' }}>{item.singer}</Text>
          
          {renderStars(parseInt(item.rate))}
          <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#3498db",
                paddingVertical: 8,
                paddingHorizontal: 14,
                borderRadius: 8,
              }}
              onPress={() =>
                UpdateSong(item.id, { brand: "Atualizado" })
              }
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#e74c3c",
                paddingVertical: 8,
                paddingHorizontal: 14,
                borderRadius: 8,
              }}
              onPress={() => deleteSong(item.id)}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>Excluir</Text>
            </TouchableOpacity>
          </View>

        </View>
    )}/>
    </View>
  )
}


const styles = StyleSheet.create({
  
  title: {
    color: 'brown',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: "10%",
    marginBottom: "10%"
  },

  subtitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 700,

  },

  inputbar: {
    backgroundColor: '#f2f5f3',
    padding: 10,
    borderRadius: 10,
    color: 'gray',
    width: '100%',
  },

  password: {
    color: 'brown',
    fontSize: 13,
    textDecorationLine: 'underline',
    textAlign: 'center',

  },

  //oi

  button: {
    color: 'white',
    backgroundColor: 'brown',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    width: '100%',
    fontSize: 20
  }

  })