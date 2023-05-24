---
sidebar_position: 4
---

# Useful Tools

>Install these for your own convenience.

## Internet Performance

A good connectivity to the Internet is a critical aspect of every remote server, thus having the tools to check this aspect is of utmost importance, the three most critical variables are **latency** (response time), **bandwidth** (speed) and **traffic** (volume).

The latency is the easiest to measure, yet the more difficult to analyse, as you can only measure the latency with one other machine at a time, you will need to check latency against the specific targets which are important to the operations of this server:

```shell
ping target.somedomain.tld
```

Now to measure the next variables, you will need to install some packages in your server, be always aware of the security and performance implications of installing additional packages to the barely minimum needed for your operations. But if you want to have a way to measure connectivity, you can install these tools below.

```shell
curl -s https://packagecloud.io/install/repositories/ookla/speedtest-cli/script.deb.sh | sudo bash
sudo apt install speedtest
speedtest
```

To get the following illustrative results, which you can then compare with what the hosting provider is telling about the services contracted for your server:

```
   Speedtest by Ookla

      Server: Schlueter Onlinedienste - Ruethen (id: 29806)
         ISP: Contabo GmbH
Idle Latency:     2.70 ms   (jitter: 1.00ms, low: 1.70ms, high: 5.68ms)
    Download:   195.84 Mbps (data used: 88.7 MB)
                124.03 ms   (jitter: 37.19ms, low: 1.04ms, high: 316.66ms)
      Upload:   191.06 Mbps (data used: 214.8 MB)
                  1.39 ms   (jitter: 2.18ms, low: 0.97ms, high: 33.13ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/db516797-42b0-4ead7dec7768
```

Now for the final part, some hosting companies put limitations on the quantity of monthly data you can use before hitting a higher price range, or before being downgraded or even disconnected from the Internet, if that is the case, you may consider installing the following tool to keep track of the data consumption:

```shell
sudo apt install vnstat
```

Apart of installing the package, this procedure will start a background process (also called daemon) that will collect traffic information (without sniffing into the transferred packets). You can verify that the daemon is running using the following command:

```shell
sudo systemctl status vnstat
```

If the configuration is correct, you will see that the status is active (running) in the output below:

```
● vnstat.service - vnStat network traffic monitor
     Loaded: loaded (/lib/systemd/system/vnstat.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2022-10-07 16:23:38 UTC; 22s ago
       Docs: man:vnstatd(8)
             man:vnstat(1)
             man:vnstat.conf(5)
   Main PID: 1943 (vnstatd)
      Tasks: 1 (limit: 2180)
     Memory: 824.0K
        CPU: 76ms
     CGroup: /system.slice/vnstat.service
             └─1943 /usr/sbin/vnstatd -n

Oct 07 16:23:38 yourhost systemd[1]: Started vnStat network traffic monitor.
Oct 07 16:23:38 yourhost vnstatd[1943]: No interfaces found in database, adding available interfaces...
Oct 07 16:23:38 yourhost vnstatd[1943]: Interface "ens3" added with 1000 Mbit bandwidth limit.
Oct 07 16:23:38 yourhost vnstatd[1943]: -> 1 new interface found.
```

And can be queried using the command:

```shell
vnstat
```

Which will present the standard report shown below (and it can be also customised to your particular needs and hosting parameters)

```
Database updated: 2022-10-07 16:35:00
   ens3 since 2022-10-07
          rx:  45.98 KiB      tx:  141.59 KiB      total:  187.57 KiB

   monthly
                     rx      |     tx      |    total    |   avg. rate
     ------------------------+-------------+-------------+---------------
       2022-10     45.98 KiB |  141.59 KiB |  187.57 KiB |        2 bit/s
     ------------------------+-------------+-------------+---------------
     estimated       --      |     --      |     --      |

   daily
                     rx      |     tx      |    total    |   avg. rate
     ------------------------+-------------+-------------+---------------
         today     45.98 KiB |  141.59 KiB |  187.57 KiB |       25 bit/s
     ------------------------+-------------+-------------+---------------
     estimated        66 KiB |     204 KiB |     270 KiB |
```

## Processor Performance

Now you can benchmark the speed of your CPU according to your final operations' characteristics.

For that purpose you can install a specific program like [Phoronix](https://www.phoronix-test-suite.com/?k=downloads), however you already have a smaller package already available in your system. You can try:

```shell
# To run all available tests
openssl speed

# To run tests specifically for BLAKE2b-512
openssl speed -evp blake2b512

# To run tests specifically for Ed25519-verify
openssl speed ed25519
```

Every type of test will yield a particular set of results, like the ones below:

```
CPUINFO: OPENSSL_ia32cap=0x7ed8320b078bffff:0x40069c219c97a9

The 'numbers' are in 1000s of bytes per second processed.
type             16 bytes     64 bytes    256 bytes   1024 bytes   8192 bytes  16384 bytes
blake2b512       77737.54k   315060.87k   834346.04k  1128948.01k  1288414.67k  1294963.59k

                              sign    verify    sign/s verify/s
 253 bits EdDSA (Ed25519)   0.0000s   0.0001s  32438.3  12028.7
```

As this is a benchmark, you will need to compare these numbers with other machines configured to perform similar jobs as your server, and that comparison will likely help you predicting the performance of your machine.

It is now time to check how is the  CPU utilisation looking, and that is queried via the command:

```shell
sudo apt install htop
htop
```

This launches an interface in which you will be able to see every one of the active processes and their contribution to the CPU load:

<< image here>>

## Memory performance

System memory is characterised by its size and speed, one command to quickly check the sizes of memory is:

```shell
free
```

resulting in:

```
               total        used        free      shared  buff/cache   available
Mem:        65773828     6504404     8267284        2816    51002140    58537528
Swap:        1048568           0     1048568
```

If you want to benchmark the speed of your server’s RAM, you could use `sysbench`:

```shell
sudo apt install sysbench
```

This package can benchmark a lot of performance metrics, but we’re only focused on the memory test.

The following command allocates 1 MB of RAM, then performs write operations until it has written 10 GB of data, (Don’t worry, you don’t need 10 GB of RAM to do this benchmark.)

```shell
sysbench --test=memory --memory-block-size=1M --memory-total-size=10G run
```

This will display the memory speed in MiB/s, as well as the access latency associated with it:

```
sysbench 1.0.20 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Running memory speed test with the following options:
  block size: 1024KiB
  total size: 10240MiB
  operation: write
  scope: global

Initializing worker threads...

Threads started!

Total operations: 10240 (34349.40 per second)

10240.00 MiB transferred (34349.40 MiB/sec)


General statistics:
    total time:                          0.2977s
    total number of events:              10240

Latency (ms):
         min:                                    0.03
         avg:                                    0.03
         max:                                    0.08
         95th percentile:                        0.03
         sum:                                  296.29

Threads fairness:
    events (avg/stddev):           10240.0000/0.00
    execution time (avg/stddev):   0.2963/0.00
```

## Storage performance

Same again, storage can be measured in size and speed, for size we recommend the following commands:

```shell
# To show the disk sizes and remaining space 
df -h

# To show the list of directories and files ordered by size
sudo du -ah / | sort -h
```

A great tool that is worth using is `ncdu`:

```shell
sudo apt install ncdu
cd /
sudo ncdu
```
as it provides a graphical interface to explore the usage of your disk space:

<< Insert screenshot here>>

But in terms of speed, look nowhere else than in `fio` to test your rig:

```shell
sudo apt install fio
```

and use it to perform many type of test, according to your needs:

```shell
# Random read & write performance, 75%:25% mix
sudo fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=random_read_write.fio --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75

# Random read performance
sudo fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=random_read.fio --bs=4k --iodepth=64 --size=4G --readwrite=randread

# Random write performance
sudo fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=random_write.fio --bs=4k --iodepth=64 --size=4G --readwrite=randwrite
```

These will be a sample the results:

```
test: (groupid=0, jobs=1): err= 0: pid=4760: Thu Mar  2 13:23:28 2017
  read : io=7884.0KB, bw=864925B/s, iops=211, runt=  9334msec
  write: io=2356.0KB, bw=258468B/s, iops=63, runt=  9334msec
  cpu          : usr=0.46%, sys=2.35%, ctx=2289, majf=0, minf=29
  IO depths    : 1=0.1%, 2=0.1%, 4=0.2%, 8=0.3%, 16=0.6%, 32=1.2%, >=64=97.5%
     submit    : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
     complete  : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.1%, >=64=0.0%
     issued    : total=r=1971/w=589/d=0, short=r=0/w=0/d=0, drop=r=0/w=0/d=0
     latency   : target=0, window=0, percentile=100.00%, depth=64

Run status group 0 (all jobs):
   READ: io=7884KB, aggrb=844KB/s, minb=844KB/s, maxb=844KB/s, mint=9334msec, maxt=9334msec
  WRITE: io=2356KB, aggrb=252KB/s, minb=252KB/s, maxb=252KB/s, mint=9334msec, maxt=9334msec

Disk stats (read/write):
    dm-2: ios=1971/589, merge=0/0, ticks=454568/120101, in_queue=581406, util=98.44%, aggrios=1788/574, aggrmerge=182/15, aggrticks=425947/119120, aggrin_queue=545252, aggrutil=98.48%
  sda: ios=1788/574, merge=182/15, ticks=425947/119120, in_queue=545252, util=98.48%
```
