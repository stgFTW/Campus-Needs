import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/shared/SEOHead";
import { LIVE_CATEGORIES, LISTINGS_EMAIL } from "@/lib/constants";
import { motion } from "framer-motion";
import { Info, CheckCircle, Upload, X } from "lucide-react";

export default function ListYourItemPage() {
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageError, setImageError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: "",
    itemName: "",
    description: "",
    price: "",
    location: "",
    notes: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "email") setEmailError("");
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImageError("");

    // Validate file count
    if (imageFiles.length + files.length > 3) {
      setImageError("You can upload a maximum of 3 images.");
      return;
    }

    // Validate file types and sizes
    const validFiles = [];
    const validPreviews = [];

    for (const file of files) {
      // Check file type
      if (!['image/jpeg', 'image/png', 'image/heic'].includes(file.type)) {
        setImageError("Only JPEG, PNG, and HEIC images are allowed.");
        continue;
      }

      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setImageError(`${file.name} is too large. Max size is 5MB.`);
        continue;
      }

      validFiles.push(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        validPreviews.push(reader.result);
        if (validPreviews.length === validFiles.length) {
          setImagePreviews((prev) => [...prev, ...validPreviews]);
        }
      };
      reader.readAsDataURL(file);
    }

    setImageFiles((prev) => [...prev, ...validFiles]);
  };

  const removeImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageError("");
  };

  const validateEmail = (email) => {
    return email.toLowerCase().endsWith("@usfca.edu");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid @usfca.edu email address.");
      return;
    }
    if (imageFiles.length < 2) {
      setImageError("Please upload at least 2 photos of your item.");
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SEOHead
        title="List Your Item — Campus Needs"
        description="Submit your item or service to be listed on the Campus Needs USF student marketplace."
      />

      {/* Page Header */}
      <section className="bg-hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            List your item or service
          </h1>
          <p className="mt-3 text-base text-primary-foreground/75 max-w-lg">
            Submit your details below. We verify your USF email and list it on
            your behalf within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-primary/20 bg-green-tint p-8 sm:p-10 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Listing submitted!
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                Your listing has been submitted. We will review it and verify
                your USF email within 24 hours. If approved, your item will go
                live on the Campus Needs marketplace.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Info Box */}
              <div
                className="rounded-lg p-4 mb-8 flex items-start gap-3"
                style={{ backgroundColor: "#E8F5ED" }}
              >
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">
                  Only @usfca.edu email addresses are accepted. Submissions from
                  non-USF emails will not be listed.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="h-11"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    USF email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="yourname@usfca.edu"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`h-11 ${emailError ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {emailError && (
                    <p className="text-xs text-destructive">{emailError}</p>
                  )}
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium text-foreground">
                    Category
                  </Label>
                  <Select
                    required
                    value={formData.category}
                    onValueChange={(val) => handleChange("category", val)}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {LIVE_CATEGORIES.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Item Name */}
                <div className="space-y-2">
                  <Label htmlFor="itemName" className="text-sm font-medium text-foreground">
                    Item or service name
                  </Label>
                  <Input
                    id="itemName"
                    type="text"
                    required
                    placeholder="e.g. Mini-fridge, Graphing calculator, Desk lamp"
                    value={formData.itemName}
                    onChange={(e) => handleChange("itemName", e.target.value)}
                    className="h-11"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium text-foreground">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    required
                    maxLength={500}
                    placeholder="Be as detailed as possible. Include brand, condition, size, and any flaws. (Max 500 characters)"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="min-h-[120px] resize-y"
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.description.length}/500 characters
                  </p>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="images" className="text-sm font-medium text-foreground">
                    Item photos <span className="text-destructive">*</span>
                  </Label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <label
                        htmlFor="images"
                        className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-colors duration-200"
                      >
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <span className="text-sm font-medium text-foreground">
                          Click to upload photos
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">
                          JPEG, PNG, HEIC (Max 5MB each)
                        </span>
                      </label>
                      <input
                        id="images"
                        type="file"
                        accept="image/jpeg,image/png,image/heic"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      Upload 2-3 clear photos of your item. Show different angles and any flaws.
                    </p>

                    {imageError && (
                      <p className="text-xs text-destructive">{imageError}</p>
                    )}

                    {/* Image Previews */}
                    {imagePreviews.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {imagePreviews.map((preview, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={preview}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-border"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-sm font-medium text-foreground">
                    Asking price or service fee
                  </Label>
                  <Input
                    id="price"
                    type="text"
                    required
                    placeholder="e.g. $25, $10/trip, Free"
                    value={formData.price}
                    onChange={(e) => handleChange("price", e.target.value)}
                    className="h-11"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium text-foreground">
                    Preferred pickup or meetup location on campus
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    required
                    placeholder="e.g. Gleeson Library, Lo Schiavo, Lone Mountain"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="h-11"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm font-medium text-foreground">
                    Anything else we should know? <span className="text-muted-foreground font-normal">(optional)</span>
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional details..."
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    className="min-h-[80px] resize-y"
                  />
                </div>

                {/* Submit */}
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Submit My Listing
                </Button>

                {/* Disclaimer */}
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  By submitting this form, you confirm that you are a current USF
                  student and that all item details are accurate and honestly
                  described.
                </p>

                {/* Review note */}
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  We review every listing before it goes live. You will hear back
                  within 24 hours at{" "}
                  <a
                    href={`mailto:${LISTINGS_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {LISTINGS_EMAIL}
                  </a>
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
