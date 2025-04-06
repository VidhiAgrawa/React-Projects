public class binarySearch {
    public static int search( int arr[], int left, int right, int target ) {
        
        // while( left <= right ){
        //     int mid = ( left + right ) / 2;
        //     if( arr[mid] == target ){
        //         System.out.println("Got it :- " + target);
        //     }
        //     else if( arr[mid] > target ){
        //         right = mid - 1;
        //     }
        //     else if ( arr[mid] < target ){
        //         left = mid + 1;
        //     }
        // }
        
        if(left > right) return 0;
        int mid = (left + right) / 2;
        if( arr[mid] == target ){
            System.out.println("Got it");
        }
        else if( arr[mid] > target ){
            search(arr, left, mid-1, target);
        }
        else if ( arr[mid] < target ){
            search(arr, mid+1, right, target);
        }
        return -1;
    }
    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 5, 6, 7 };
        int target = 7;
        search(arr, 0, arr.length-1, target);
    }
}