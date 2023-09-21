for ((i=1; i<42; i++)); do
	filename="${i}.txt"
	touch chapters/$filename
	echo "File $filename created."
done