public class QuickSort {
    public static void main(String[] args) {
        int arr[] = { 54, 78, 90, 12, 6, 5, 787 };
        sort(arr, 0, arr.length-1);
    }
    public static void sort( int arr[], int left, int right ) {
        if( left >= right  ) return;

        int pivot = partition(arr, left, right);

        sort(arr, pivot + 1, right);
        sort(arr, left, pivot - 1);
        
       
    }
    public static int partition( int arr[], int left, int right ) {
        int pivot  = arr[right];
        int index = left;

        for (int i = left; i < right; i++) {
            if( arr[i] < pivot ){
                int temp = arr[index];
                arr[index] = arr[i];
                arr[i] = temp;
                index++;
            }
        }
        int temp = arr[index];
        arr[index] = arr[right];
        arr[right] = temp;


        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "\t");
        }
        System.out.println();

        return index;
    }
}
