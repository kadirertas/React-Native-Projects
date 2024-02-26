
import React , {useState ,useEffect} from "react";
import {View ,Button,  Text , SafeAreaView, FlatList,Switch, PanResponder }   from 'react-native'; 

const Cafes = 
[
{ id :0 , name:'Kafe.exe' , isFavorite: false } ,  
{ id :1 , name:'KafaKafe' , isFavorite: false  },
{ id :2 , name:'BugG' , isFavorite: true  },
{ id :3 , name: 'Rock in code' , isFavorite: false },
{ id :4 , name: 'do Drink ' , isFavorite: false },
{ id :5 , name: 'esc' , isFavorite: true },

];



   function App () 
   {
     
     
/* State  (not : Hem State de hem de lifescyle da return var  dikkat et )
    const [CafeList , SetCafelist] = useState(Cafes); 
       const [ShowOnlyfavorites , SetShowOnlyFavorites] = useState (false)

     function OnfavoritesChange ( isFavoritesSelected:boolean)
        {
          SetShowOnlyFavorites(isFavoritesSelected); 
          isFavoritesSelected 
          ? 
          SetCafelist ( CafeList.filter ( cafe => cafe.isFavorite))
          : 
          SetCafelist(Cafes);


        }
    return(
      <View>
        <View>
          <Text>
            Show Only Favorite
          </Text>
          <Switch value = {ShowOnlyfavorites} style = {{width : 50 , height : 50 }} onValueChange={OnfavoritesChange}/>
        </View>

        <FlatList
        
        data = {CafeList}
        renderItem = {({item})=> <Text>{item.name}</Text>}
        
        
        />

      </View>
*/


        const [number , SetNumber ] = useState(0 ) ;
        const [ sayi , SetSayi] = useState(0 ) ;

      return(

       useEffect(() => {
        console.log('NUMBER STATE DEĞERİ DEĞİŞTİ  '); 
       }, [number]) ,

       useEffect(() => {
           console.log('SAYİ STATE DEĞERİ DEĞİŞTİ '); 
       }, [sayi]), 

    <View>
        <Text>Hello LifeCyle </Text>
        
        
        <Text  style= {{fontSize:25, fontWeight: 'bold'}}>   Counter : {number}</Text>
        <Button title="tıkla ve artır" onPress={()=>SetNumber(number+1)} />
        <Text style= {{fontSize:25, fontWeight: 'bold'}} >   Counter2 : {sayi}</Text>
        <Button title="tıkla ve azalt" onPress={()=>SetSayi(sayi-1)} />
        </View>





     ); 
   }



   export default App ; 


  /*
   
  State Mevzusu Şu Drek anlık veri basabilmek 

  mesela yukardaki counter değerini ben direk fonksiyon içinde artırırım fakat state olmadan ekrana anlık olarak basamam 
  
  
  */


  /*
    useEffect fonksiyonunun temeli şuna dayanır 

    siz state ile tutulan değişkeni değiştirdiğinizde anlık değer ekrana basılması için component 
    ( fonksiyon) tekrar yenilenir bu zaten normaldir. 

    useEffect'in olayı ise atıyorum x state i yenilenirse şunu yap tarzı bir function oluşturur 
    buda atıyorum  siz bir mağza uygulamasında kargo için konum belirtiyorsunuz ve mağza misal 500 km öteye paket yollamıyorsa siz 
    useEffect fonksiyonu içinde bu koşul sağlanmassa işte 'belirtilen konuma teslimat yapılamıyor' tarzı uyarı basmak için kullanılabilir. 

    NOT : Unutma State Çağrıldığı yerde direk güncellenmez state güncellenebilmesi için fonksiyonun tamamlanması gerekir

    Mounting = 
    Bu direk useEffect fonksiyonunun bir değişkene tutturulmadan boş dizi ile çağrılmasıdır. 
    Peki Bu Nedemek oluyor; 
    Uygulama Çalıştıgında bir kez çalışır başka çalışmaz 
    Genelde Ekrana veri çekmek için kullanılır
 


    Clean Up = Hani Üstte useEffect fonksiyonunun bir değişkene tutturulmadan boş dizi ile çağrılmasıdır. dedikya mounting için eğer bu 
    useEffect içine return (() =>{...}) tarzı bir  değer yazarsak clean up olur ve tek bir kez gösterilen bir değerin,öğenin vs yok olduğunda ne 
    yapılacaksa buraya yazılabilir 
  */