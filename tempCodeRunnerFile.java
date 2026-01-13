class EvenThread extends Thread {
    int n;
    EvenThread(int n) {this.n = n; }
    public void run(){
        System.out.println(n +"is even");
        System.out.println("square is:"+ (n*n));
    }
}

class OddThread extends Thread  {
    int n;
    OddThread(int n) {this.n = n; }
    public void run(){
        System.out.println(n+" is odd");
        System.out.println("cube is: "+n*(n*n));
    }
}

public class Main{
    public static void main(String[] args){
        int x = (int)(Math.random()*100);
        System.out.println("generated: "+x);
        
        if (x%2==0){
            new EvenThread(x).start();
        }else{
            new OddThread(x).start();
        }
    }
}